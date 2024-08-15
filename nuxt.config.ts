// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  modules: ['@pinia/nuxt'],
  devtools: { enabled: true },
  css: ['~/assets/main.css'],
  devServer: {
    host: 'https://localhost:8000/'
  }
})
