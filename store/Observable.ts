import {defineStore} from "pinia";
import {ref} from "vue";

export const useObservableStore = defineStore('observableStore', () => {
    const observableStoreTest = ref('Nuxt 3 Pinia тестим');
    const storeNum = ref(0);
    const user = ref({
        login:'',
        password:'',
        email:'',
        authStatus: ''
    })
    onMounted(() => {
        user.value = JSON.parse(localStorage.getItem('user')|| '{}')
    });
    async function getLocalUser() {
        user.value = JSON.parse(localStorage.getItem('user')|| '{}')
        return await JSON.parse(localStorage.getItem('user')|| '{}')
    }
    return {
        observableStoreTest,
        storeNum,
        user,
        getLocalUser
    }
})
