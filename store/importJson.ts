import {defineStore} from "pinia";
import {ref} from "vue";

export const importJson = defineStore('importJson',   () => {
    let countObject = ref()
    async function loadWidgets() {
        countObject.value = 6;
        return await import('~/assets/json/test.json')
    }


    return {
        loadWidgets,
        countObject
    }
})
