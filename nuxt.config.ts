// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
ssr: false,
compatibilityDate: '2024-04-03',
devtools: { enabled: true },
modules: [
'@nuxt/image',
'@nuxt/ui',
'shadcn-nuxt',
['@nuxtjs/google-fonts', {
				families: {
							Lato:{
												wght:[300,400,700],
												ital:[300],
								}
				}
}],
'@nuxt/icon',
'@pinia/nuxt',
['@vee-validate/nuxt', {
// disable or enable auto imports
				autoImports: true,
				},
],
],
shadcn: {
   prefix:'Ui',
   componentDir:'./components/ui'
},
pinia: {
storesDirs: ['./store/**'],
},
})