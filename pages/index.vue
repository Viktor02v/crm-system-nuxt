<script setup lang="ts">
import type { ICard, IColumn } from '~/components/board/board.types';
import { useBoardQuery } from '~/components/board/useBoardQuery';

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
			<UiCard class="mb-3" draggable="true">
				<UiCardHeader role="button">name Card</UiCardHeader>
				<UiCardContent>Company</UiCardContent>
				<UiCardFooter>Date</UiCardFooter>
			</UiCard>
		</div>
	</div>

</template>



<style scoped></style>