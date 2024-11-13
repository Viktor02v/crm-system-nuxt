<script setup lang="ts">
import type { ICard, IColumn } from '~/components/board/board.types';
import { useBoardQuery } from '~/components/board/useBoardQuery';
import { convertCurrency } from '@/utils/convertCurrency'
import dayjs from 'dayjs'
import { useMutation } from '@tanstack/vue-query';
import type { EnumStatus } from '~/types/deals.types';
import { DB_ID, COLLECTION_DEALS } from '@/utils/app.constants';
import { generateColumnStyle } from '~/components/board/generate-gradient';
import { useDealSlideStore } from '@/store/deal-slide.store';

useSeoMeta({
	title: 'Home | CRM System'
})

// States
const dragCard = ref<ICard | null>(null)
const sourceColumn = ref<IColumn | null>(null)
const { data, isLoading, refetch } = useBoardQuery()
const store = useDealSlideStore();

type TypeMutationVariables = {
	docId: string,
	status?: EnumStatus,
}

const { mutate } = useMutation({
	mutationKey: ['move card'],
	mutationFn: ({ docId, status }: TypeMutationVariables) =>
		DB.updateDocument(DB_ID, COLLECTION_DEALS, docId, {
			status,
		}),
	onSuccess: () => {
		refetch()
	},
})

function handleDragStart(card: ICard, column: IColumn) {
	dragCard.value = card
	sourceColumn.value = column
}

function handleDragOver(event: DragEvent) {
	event.preventDefault()
}

function handleDrop(targetColumn: IColumn) {
	if (dragCard.value && sourceColumn.value) {
		mutate({ docId: dragCard.value.id, status: targetColumn.id })
	}
}
</script>

<template>
	<div class="p-10">
		<h1 class="font-bold text-2xl mb-10">CRM System</h1>
		<div v-if="isLoading">Loading...</div>
		<div v-else>
			<div class="grid grid-cols-4 gap-16">

				<div @dragover="handleDragOver" @drop="() => handleDrop(column)" v-for="(column, index) in data"
					:key="column.id">

					<div class="rounded bg-slate-700 py-1 px-5 mb-2 text-center"
						:style="generateColumnStyle(index, data?.length)">
						{{ column.name }}
					</div>

					<div>
						<BoardCreateDeal :refetch="refetch" :status="column.id" />

						<UiCard @dragstart="() => handleDragStart(card, column)" v-for="card in column.items" :key="card.id"
							class="mb-5 text-sm" draggable="true">

							<UiCardHeader role="button" @click="store.set(card)">
								<UiCardTitle>{{ card.name }}</UiCardTitle>

								<UiCardDescription>{{
									convertCurrency(card.price)
								}}</UiCardDescription>
							</UiCardHeader>

							<UiCardContent>Company {{ card.companyName }}</UiCardContent>

							<UiCardFooter>{{ dayjs(card.$createdAt).format('DD MMMM YYYY') }}</UiCardFooter>
						</UiCard>
					</div>
				</div>
			</div>
			<BoardSlideover />
		</div>
	</div>

</template>



<style scoped>
</style>
