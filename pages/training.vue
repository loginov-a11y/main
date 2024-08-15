
<template>
 <div class="pageContainer">
   <h1>Задачи база  + {{ObservableStore.observableStoreTest}}</h1>
   <div>
     <h3>Прибавление
       <span v-if="additionPlusOnce">
        (
        {{additionPlusOnce}}
        <span v-if="additionPlusTwo">+</span>
        {{additionPlusTwo}}
        )
      </span>
     </h3>
     <div class="calk">
       <input type="number" v-model="additionPlusOnce">
       <span>+</span>
       <input type="number" v-model="additionPlusTwo">
       <button type="button" @click="trainingStore.addition(additionPlusOnce,additionPlusTwo)">=</button>
       <span>{{trainingStore.additionSum}}</span>
     </div>
   </div>
   <div>
     <h3>Умножение
       <span v-if="additionMulOnce">
        (
        {{additionMulOnce}}
        <span v-if="additionMulTwo">*</span>
        {{additionMulTwo}}
        )
      </span>
     </h3>
     <div class="calk">
       <input type="number" v-model="additionMulOnce">
       <span>*</span>
       <input type="number" v-model="additionMulTwo">
       <button type="button" @click="trainingStore.multiplication(additionMulOnce,additionMulTwo)">=</button>
       <span>{{trainingStore.additionMultiplier}}</span>
     </div>
     <div class="importTest">
       <button @click="getWidgets()">import start</button>
     </div>
     <div class="importTest">
       <button class="btn" @click="trainingStore.computedTestIncrease()">Computed test {{trainingStore.computedTestNumber}}</button>
       <button class="btn">Watch test</button>
     </div>
   </div>
 </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import {useTrainingStore} from '~/store/TrainingPinia'
import {importJson} from "~/store/importJson";
import { useObservableStore } from "~/store/Observable";
const ObservableStore =  useObservableStore();
const trainingStore = useTrainingStore();
const iJson = importJson()
const testJson = ref();
const additionPlusOnce = ref();
const additionPlusTwo =  ref();
const additionMulOnce = ref();
const additionMulTwo =  ref();
const getWidgets = async () => {
  testJson.value = await iJson.loadWidgets();
  testJson.value.default.forEach((element:any)=>{
    console.log(element)
  })
};

onMounted(() => {
  console.log(ObservableStore.user)
})


</script>

<style scoped>
  .calk{
    display: flex;
    flex-wrap: wrap;
    margin: 0 0 20px 0;
    width: 300px;
  }
  .calk h3{
    width: 100%;
  }
  .calk input{
    width: 50px;
  }
  .calk button{
    cursor: pointer;
    margin: 0 5px;
  }
  .calk span{
    display: block;
    align-items: center;
    min-width: 20px;
    height: 20px;
    text-align: center;
    padding: 0 5px;
    line-height: 20px;
  }
  .calk span:last-of-type{
    border: solid 1px #000;
  }
  .importTest{
    border: solid 2px #000;
    padding: 10px;
  }
  .btn{
    margin:10px 10px 10px 0;
    padding: 5px;
    font-size: 18px;
  }
</style>