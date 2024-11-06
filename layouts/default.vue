<script setup lang="ts">
import Sidebar from '~/components/layout/Sidebar.vue';


</script>

<template>
	<section class="grid" style="min-height:100vh">
		<LayoutSidebar/>
		<div>
			<slot />
		</div>
	</section>
</template>

<style scoped>
.grid {
	display: grid;
	grid-template-columns: 1fr 6fr;
}
</style>
