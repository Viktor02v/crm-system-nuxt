<script setup lang="ts">
import { useDealSlideStore } from '@/store/deal-slide.store';

const store = useDealSlideStore();

const isLocalOpen = computed({
	get: () => store.isOpen,
	set: value => {
		store.isOpen = value
	}
})

</script>

<template>
	<div>
		<USlideover v-model="isLocalOpen">
			<UCard class="flex flex-col flex-1 overflow-y-auto bg-[#0f172c]" :ui="{
				body: { base: 'flex-1' },
				ring: '',
				divide: 'divide-y divide-border'
			}">
				<template #header>
					<BoardSlideoverTop />
				</template>

				<BoardSlideoverComments />
			</UCard>
		</USlideover>
	</div>
</template>



<style scoped>
.uslideover-overlay {
	background-color: rgba(0, 0, 0, 0.5);
	/* Darker overlay */
}
</style>