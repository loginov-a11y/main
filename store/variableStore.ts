import {defineStore} from "pinia";
import {ref} from "vue";


export const useVariableStore = defineStore('variableStore', () => {
    const
        formStatusLoader = ref(false)

    return {
        formStatusLoader,
    }
})