<script setup lang="ts">
import dayjs from 'dayjs'
import { useDealSlideStore } from '@/store/deal-slide.store';

const store = useDealSlideStore()
</script>

<template>
	<div class="border-border bg-black/20 rounded p-3">
		<div class="uppercase bold text-xl mb-4">
			About Deal
		</div>
		<BoardSlideoverLabel label-text="Apellation">
			<h2>
				{{ store.card?.name }}
			</h2>
		</BoardSlideoverLabel>
		<BoardSlideoverLabel label-text="Price">
			{{ convertCurrency(store.card?.price || 0) }}
		</BoardSlideoverLabel>
		<BoardSlideoverLabel label-text="Status">
			<UiBadge variant="outline">
				{{ store.card?.status }}
			</UiBadge>
		</BoardSlideoverLabel>
		<BoardSlideoverLabel label-text="Client">
			{{ store.card?.companyName }}
		</BoardSlideoverLabel>
		<BoardSlideoverLabel label-text="Create Date">
			{{ dayjs(store.card?.$createdAt).format('DD MMMM YYYY') }}
		</BoardSlideoverLabel>
	</div>
</template>

<style scoped></style>