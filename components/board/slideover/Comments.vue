<script setup lang="ts">
import dayjs from 'dayjs'
import type { IDeal } from '~/types/deals.types';
import { useComments } from './useComments';
import { useCreateComment } from './useCreateComment';

const { data, refetch, isLoading } = useComments()
const { comment, writeComment } = useCreateComment({ refetch })

const card = data as unknown as IDeal
</script>

<template>
	<div>
		<UiInput placeholder="Leave your comment" v-model="comment" @keyup.enter="writeComment" />
	</div>

	
</template>



<style scoped></style>