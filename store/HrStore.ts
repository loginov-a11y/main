import {defineStore} from "pinia";
import {ref} from "vue";

export const useHrStore = defineStore('hrStore', () => {
    const hrName = ref(''),
        hrWelcomeModal = ref(true),
        hrManager = ref()
    return {
        hrName,
        hrWelcomeModal,
        hrManager
    }
})