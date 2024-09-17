

export default defineNuxtRouteMiddleware((to, from) => {
    console.log('test------------------------------')
    const route = useRoute()
    watch(() => route, (newRoute) => {
        console.log('track route: ', newRoute.path)
    }, { immediate: true, deep: true })
})