import {defineStore} from "pinia";
import {ref} from "vue";



export const useVariableStore = defineStore('variableStore',   () => {
    const
        authSend = ref(false),
        loader = ref(false),
        pageLoader = ref(true),
        storeNum = ref(),
        urlPage = ref('');

    return {
        authSend,
        loader,
        storeNum,
        urlPage,
        pageLoader
    }
})