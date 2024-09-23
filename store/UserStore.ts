import {defineStore} from "pinia";
import {ref} from "vue";


export const useUserStore = defineStore('userStore', () => {
    const authInfo = ref({
            login: 'winscode',
            password: '123456',
            email: 'winScode@mail.ru',
        }),
        user = ref({
            login: '',
            password: '',
            email: '',
            authStatus: ''
        }),
        authSend = ref(false)
    return {
        authInfo,
        user,
        authSend
    }
})