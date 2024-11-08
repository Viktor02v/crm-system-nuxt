<script setup lang="ts">

useHead({
	title: 'Login | CRM System',
})

const emailRef = ref('');
const passwordRef = ref('');
const nameRef = ref('');

const isLoadingStore = useIsLoadingStore()
const authStore = useAuthStore()
const router = useRouter()

const login = async () => {
	// Turn On Loader
	isLoadingStore.set(true)
	// Crreating Session
	await account.createEmailPasswordSession(emailRef.value, passwordRef.value)
	// Waiting for Current Account
	const response = await account.get()
	if (response) {
		// Asign Current Account in Store
		authStore.set({
			email: response.email,
			name: response.name,
			status: response.status,
		})
	}

	// Assing Void
	emailRef.value = ''
	passwordRef.value = ''
	nameRef.value = ''
	// Redirrect
	await router.push('/')
	// Turn Of Loader
	isLoadingStore.set(false)
}
</script>

<template>
	<div class="flex items-center justify-center min-h-screen w-full">
		<div class="rounded bg-sidebar w-1/4 p-5">
			<h1 class="text-2xl font-bold text-center mb-5">Login</h1>

			<form>
				<UiInput v-model="emailRef" placeholder="Email" type="email" class="mb-3" />
				<UiInput v-model="passwordRef" placeholder="Password" type="password" class="mb-3" />
				<UiInput v-model="nameRef" placeholder="Name" type="name" class="mb-3" />
			</form>

			<div class="flex items-center justify-center gap-5">
				<UiButton type="button">Login</UiButton>
				<UiButton type="button">Register</UiButton>
			</div>
		</div>
	</div>
</template>



<style scoped></style>