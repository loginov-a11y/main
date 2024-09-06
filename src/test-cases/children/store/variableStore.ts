import {defineStore} from "pinia";
import {ref, type UnwrapRef} from "vue";

export const useChildrenVariableStore = defineStore('childrenVariableStore', () => {
    const childrenList: Ref<UnwrapRef<any[]>> = ref([]);
    return {
        childrenList
    }
})

