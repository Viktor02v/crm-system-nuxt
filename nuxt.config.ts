// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
compatibilityDate: '2024-04-03',
devtools: { enabled: true },
modules: [
 '@nuxt/image',
 '@nuxtjs/tailwindcss',
 'shadcn-nuxt',
 '@nuxtjs/color-mode',
 ['@nuxtjs/google-fonts', {
	families: {
					Lato:{
									wght:[300,400,700],
									ital:[300],
								}
				}
	}],
 '@nuxt/icon',
 '@pinia/nuxt'
],
shadcn: {
   prefix:'Ui',
   componentDir:'./components/ui'
},
pinia: {
	storesDirs: ['./store/**'],
},
})