import {defineStore} from "pinia";
import {ref, watch} from "vue";
//import {useObservableStore} from "~/store/Observable";
import { useVariableStore } from "~/store/variableStore";

export const useTrainingApiStore = defineStore('useTrainingApiStore', () => {
    const varStore = useVariableStore()
    const stateLoader = ref(false);
    const citySet = ref({})
    const token = ref('f6cff66db16be31249cd7a802b60867a80263b8c');
    const clear = () => {
        citySet.value = {}
    }
    //const ObservableStore = useObservableStore()

    const newSearch = async(search:string,request: string) => {
        stateLoader.value = true;
        const res = await fetch(
            search,
            {
                method: "POST",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "Authorization": "Token " + token.value
                },
                body: JSON.stringify({query: request})
            }
        );
        let data = await res.json();
        citySet.value = data.suggestions
        stateLoader.value = false;
    }
    watch(()=> varStore.storeNum,() =>{
        console.log('testObservableStore.storeNum useTrainingApiStore',varStore.storeNum)
    }, {deep: true})
    return {
        newSearch,
        stateLoader,
        citySet,
        clear
    }
})
