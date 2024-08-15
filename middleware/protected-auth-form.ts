import { useObservableStore } from "~/store/Observable";

const ObservableStore = useObservableStore();
export default defineNuxtRouteMiddleware((to, from) => {
    if (ObservableStore.user.authStatus === 'successfully') {
        return navigateTo("/admin");
    }

})