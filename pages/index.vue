<script setup lang="ts">
import type { ICard, IColumn } from '~/components/board/board.types';

useSeoMeta({
	title: 'Home | CRM System'
})

// States
const dragCardRef = ref<ICard | null>(null)
const sourceColumnRef = ref<IColumn | null>(null)
</script>

<template>
	<div class="p-10">
		<h1 class="font-bold text-2xl mb-10">CRM System</h1>

		<div>
			<UiCard class="mb-3" draggable="true">
				<UiCardHeader role="button">name Card</UiCardHeader>
				<UiCardContent>Company</UiCardContent>
				<UiCardFooter>Date</UiCardFooter>
			</UiCard>
		</div>
	</div>

</template>



<style scoped></style>