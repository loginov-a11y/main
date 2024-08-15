import {defineStore} from "pinia";
import {ref} from "vue";
import { useObservableStore } from "~/store/Observable";

export const useLoginStore = defineStore('loginStore',   () => {
    const authInfo = ref({
        login: 'winscode',
        password: '123456',
        email: 'winScode@mail.ru',
    })

    const ObservableStore = useObservableStore();
    const authSend = ref(false)
    const loader = ref(false);

    async function sendAuth(login: string,email: string, password: string) {
        loader.value = true
        setTimeout(()=>{
            if(password === authInfo.value.password && login === authInfo.value.login){
                localStorage.setItem('user', JSON.stringify({login:login, email:email, password:password,status:'successfully'}));
                ObservableStore.user.login = login;
                ObservableStore.user.password = password;
                ObservableStore.user.email = email;
                ObservableStore.user.authStatus = 'successfully';
                loader.value = false
                return navigateTo("/admin");
            }else{
                authSend.value = true
            }
            loader.value = false
            setTimeout(()=>{
                authSend.value = false;
            },1000)
        },1000)
    }
    onMounted(() => {

    })

    return {
        sendAuth,
        loader,
        authSend
    }
})
