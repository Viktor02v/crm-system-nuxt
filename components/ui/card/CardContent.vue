<script setup lang="ts">
import type { HTMLAttributes } from 'vue'
import { cn } from '@/utils/utils'

const props = defineProps<{
	class?: HTMLAttributes['class']
}>()
</script>

<template>
	<div :class="cn(' pt-0 pb-3 text-xs', props.class)">
		<slot />
	</div>
</template>
