import {useVariableStore} from "~/store/variableStore";
import { NAV_ITEMS } from "~/constant";

export function LogOut(localStoreName: string) {
    const varStore = useVariableStore();
    varStore.user.authStatus = '';
    localStorage.removeItem(localStoreName);
    return navigateTo("/login");
}

export function localStoreSet (set:Object) {
    localStorage.setItem('user', JSON.stringify(set));
}
export function h1Search (url:string) {
    for (const property of NAV_ITEMS) {
        if(property.page === url){
            return property.h1
        }
    }
}
