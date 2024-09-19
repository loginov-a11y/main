import {defineStore} from "pinia";
import {computed, watch, ref} from "vue";
import {useVariableStore} from "~/store/variableStore";


export const useTrainingStore = defineStore('useTrainingStore', () => {

    let additionSum = ref(0);
    let additionMultiplier = ref(0);
    let computedTestNumber = ref(1)
    let watchNumber = ref(0)
    const varStore = useVariableStore()

    const addition = (one = 0, two = 0) => {
        additionSum.value = one + two
    }
    const multiplication = (one = 0, two = 0) => {
        additionMultiplier.value = one * two
    }


    const computedTest = computed(() => {
        return computedTestNumber.value
    })
    const computedTestIncrease = () => {
        ++computedTestNumber.value
        ++varStore.storeNum
    }

    watch(() => varStore.storeNum, () => {
        console.log('testObservableStore.storeNum', varStore.storeNum)
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
