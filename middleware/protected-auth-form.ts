import {localStoreGet} from "~/src/asyncFunction";

export default defineNuxtRouteMiddleware((to, from) => {
    (async function () {
        const status = await localStoreGet('user');
        if (status.authStatus === 'successfully') return navigateTo("/admin");
    })();

})