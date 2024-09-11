import {useVariableStore} from "~/store/variableStore";
import { NAV_ITEMS,BACKGROUND_LIST } from "~/src/constant";

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

export function randomBackground() {
    function invertHex(hex:string) {
        return '#' + (Number(`0x1${hex}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase();
    }
    let letters = '0123456789ABCDEF';
    let color = '#';
    let colorText = ''
    for (let i = 0; i < 6; i++) {
        colorText += letters[Math.floor(Math.random() * 16)];
    }
    let oppositeColor = invertHex(colorText);
    return [color+colorText,oppositeColor];
}
