import {defineStore} from "pinia";
import { useObservableStore } from "~/store/Observable";
const ObservableStore = useObservableStore();

export const storeAdmin = defineStore('storeAdmin',   () => {
    const logOut = () => {
        localStorage.removeItem("login");
        ObservableStore.user.authStatus = ''
        return navigateTo("/login");
    }
    return {
        logOut
    }
})
