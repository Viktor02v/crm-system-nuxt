<script setup lang="ts">

</script>

<template>
	<aside class="px-5 py-8 bg-sidebar h-full relative w-full">

		<NuxtLink to="/" class="mb-10 block">
			<NuxtImg width="100px" alt="" src="/logo.webp" class="mx-auto" />
		</NuxtLink>

		<button class="absolute top-2 right-3 transition-colors">
			<Icon name="line-md:logout" class="transition-colors logo " />
		</button>
		
	</aside>
</template>

<style scoped>
.logo {
	color: #ffffff;
	font-size: 20px;
}

.logo:hover {
	color: var(--primary);
}
</style>