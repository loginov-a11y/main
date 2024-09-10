import {defineStore} from "pinia";
import {ref} from "vue";


export const useConversionVariableStore = defineStore('conversionVariableStore', () => {

    const currencyList = ref([]),
        fullCurrencyList = ref(),
        sortCurrencyList = ref(),
        baseCurrency = ref(''),
        currencyNameList = ref();

    return {
        currencyList,
        fullCurrencyList,
        sortCurrencyList,
        baseCurrency,
        currencyNameList
    }
})