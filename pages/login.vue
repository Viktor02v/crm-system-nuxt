<script setup lang="ts">
import { v4 as uuid } from 'uuid'

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
	try {
		// Turn On Loader
		isLoadingStore.set(true)
		// Creating Session
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
		// Redirrect
		await router.push('/')
	} catch (error) {
		// Handle invalid credentials error or any other errors
		console.error("Login failed:", error)
		alert("Invalid email or password. Please try again.")
	} finally {
		// Assing Void
		emailRef.value = ''
		passwordRef.value = ''
		nameRef.value = ''
		// Turn Of Loader
		isLoadingStore.set(false)
	}
}

const register = async () => {
	// Creating Session
	await account.create(uuid(), emailRef.value, passwordRef.value, nameRef.value)
	// Call for Login
	await login()
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
				<UiButton type="button" @click="login">Login</UiButton>
				<UiButton type="button" @click="register">Register</UiButton>
			</div>
		</div>
	</div>
</template>



<style scoped></style>