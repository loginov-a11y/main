import {defineStore} from "pinia";
import {ref} from "vue";



export const useVariableStore = defineStore('variableStore',   () => {
    const
        authSend = ref(false),
        loader = ref(false),
        user = ref({
            login:'',
            password:'',
            email:'',
            authStatus: ''
        }),
        storeNum = ref(),
        urlPage = ref('');

    return {
        authSend,
        loader,
        user,
        storeNum,
        urlPage
    }
})