<script setup lang="ts">
import type { ICard, IColumn } from '~/components/board/board.types';
import { useBoardQuery } from '~/components/board/useBoardQuery';
import { convertCurrency } from '@/utils/convertCurrency'

import dayjs from 'dayjs'
useSeoMeta({
	title: 'Home | CRM System'
})

// States
const dragCardRef = ref<ICard | null>(null)
const sourceColumnRef = ref<IColumn | null>(null)


const { data, isLoading, refetch } = useBoardQuery()

</script>

<template>
	<div class="p-10">
		<h1 class="font-bold text-2xl mb-10">CRM System</h1>

		<div v-if="isLoading">Loading...</div>

		<div v-else>
			<div class="grid grid-cols-4 gap-16">

				<div v-for="(column, index) in data" :key="column.id">

					<div class="rounded bg-slate-700 py-1 px-5 mb-2 text-center">
						{{ column.name }}
					</div>

					<div>
						<UiCard v-for="card in column.items" :key="card.id" class="mb-3" draggable="true">
							<UiCardHeader role="button">{{ card.name }}</UiCardHeader>
							<UiCardContent>Company {{ card.companyName }}</UiCardContent>
							<UiCardDescription>{{
								convertCurrency(card.price)
							}}</UiCardDescription>
							<UiCardFooter>{{ dayjs(card.$createdAt).format('DD MMMM YYYY') }}</UiCardFooter>
						</UiCard>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>



<style scoped></style>
