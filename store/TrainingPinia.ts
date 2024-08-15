import {defineStore} from "pinia";
import {computed,watch, ref} from "vue";
import {useObservableStore} from "~/store/Observable";

export const useTrainingStore = defineStore('useTrainingStore', () => {

    let additionSum = ref(0);
    let additionMultiplier = ref(0);
    let computedTestNumber = ref(1)
    let watchNumber = ref(0)
    const ObservableStore = useObservableStore()

    const addition = (one = 0,two = 0) => {additionSum.value =  one + two}
    const multiplication = (one = 0,two = 0) => {additionMultiplier.value =  one * two}



    const computedTest = computed(()=>{
        return computedTestNumber.value
    })
    const computedTestIncrease = () => {
        ++computedTestNumber.value
        ++ObservableStore.storeNum
    }

    watch(()=> ObservableStore.storeNum,() =>{
        console.log('testObservableStore.storeNum',ObservableStore.storeNum)
    }, {deep: true})



    return {
        additionSum,
        additionMultiplier,
        addition,
        multiplication,
        watchNumber,
        computedTest,
        computedTestNumber,
        computedTestIncrease
    }
})
