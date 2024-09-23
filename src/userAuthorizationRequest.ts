import {useUserStore} from "~/store/UserStore";
import {useVariableStore} from "~/store/variableStore";
import {localStoreSet} from "~/src/storageFunction";
import {nameLocalStoreSetUser} from "~/src/constant";

export async function authorizationRequest(login: string, email: string, password: string) {
    const userStore = useUserStore();
    const varStore = useVariableStore();
    varStore.formStatusLoader = true;
    setTimeout(() => {
        if (password === userStore.authInfo.password && login === userStore.authInfo.login) {
            localStoreSet(nameLocalStoreSetUser,{
                login: login,
                email: email,
                password: password,
                authStatus: 'successfully'
            })
            userStore.user.login = login;
            userStore.user.password = password;
            userStore.user.email = email;
            userStore.user.authStatus = 'successfully';
            varStore.formStatusLoader = false
            return navigateTo("/admin");
        } else {
            userStore.authSend = true
        }
        setTimeout(() => {
            userStore.authSend = false;
        }, 3000)

    }, 3000)
}