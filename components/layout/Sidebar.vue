<script setup lang="ts">
import { useAuthStore, useIsLoadingStore } from '~/store/auth.store';

const isLoadingStore = useIsLoadingStore()
const authStore = useAuthStore()
const router = useRouter()

const logout = async () => {
	// Turn On Loader
	isLoadingStore.set(true)
	// Deletting Session
	await account.deleteSession('current')
	// Clear Store
	authStore.clear()
	// Redirrect to Auth Page
	await router.push('/login')
	// Turn Of Loader
	isLoadingStore.set(false)
}
</script>

<template>
	<aside class="px-5 py-8 bg-sidebar h-full relative w-full">

		<NuxtLink to="/" class="mb-10 block">
			<NuxtImg alt="Logo" src="/logo-virus.webp" class="mx-auto w-[100px] md:w-[150px]" />
		</NuxtLink>

		<button class="absolute top-4 right-3 transition-colors" @click="logout">
			<Icon name="line-md:logout" class="transition-colors logo " />
		</button>

		<LayoutMenu />
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