import {defineStore} from "pinia";
import {ref, computed, watch} from "vue";


export const urlObservableStore = defineStore('urlObservableStore', () => {
    const urlList = ref({
        '/': 'Главная',
        '/about': 'About',
        '/training': 'Базовые задачи',
        '/trainingApi': 'Задачи Api',
    });
    const iUrl = ref('');
    const outputH1 = (url) => {
        for (const property in urlList.value) {
            if(property === url){
                return urlList.value[property]
            }
        }
    }
    return {
        urlList,
        iUrl,
        outputH1,
    }
})
