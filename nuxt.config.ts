// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    modules: ['@pinia/nuxt'],
    devtools: {enabled: true},
    css: [
        '~/assets/main.css',
        "vuetify/lib/styles/main.sass"
    ],
    build: {
        transpile: ["vuetify"],
    },
    plugins: [
        { src: '~/src/plugins/vuetify' },
        { src: '~/src/plugins/vue-masonry-wall' }
    ],
    devServer: {
        host: 'https://localhost:8000/'
    }
})
