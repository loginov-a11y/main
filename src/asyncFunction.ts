import {useUserStore} from "~/store/UserStore";
import {useVariableStore} from "~/store/variableStore";
import {localStoreSet} from "~/src/functions";

export async function authorizationRequest(login: string, email: string, password: string) {
    const userStore = useUserStore();
    const varStore = useVariableStore();
    varStore.loader = true;
    console.log('start1')
    setTimeout(() => {
        console.log('start2')
        if (password === userStore.authInfo.password && login === userStore.authInfo.login) {
            localStoreSet({
                login: login,
                email: email,
                password: password,
                authStatus: 'successfully'
            })
            userStore.user.login = login;
            userStore.user.password = password;
            userStore.user.email = email;
            userStore.user.authStatus = 'successfully';
            varStore.loader = false
            return navigateTo("/admin");
        } else {
            varStore.authSend = true
        }
        varStore.loader = false
        setTimeout(() => {
            console.log('start3')
            varStore.authSend = false;
        }, 3000)

    }, 3000)
}

export async function localStoreGet(name: string) {
    return await JSON.parse(localStorage.getItem(name) || '{}')
}
export  async function jsonLocalGet(){
    return await import('assets/json/test.json')
}