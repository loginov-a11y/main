<template>
  <div class="pageContainer">
    <h1>{{urlStore.outputH1(useRequestURL().pathname)}}</h1>
    <div>
      Api
      <div class="mh" v-if="!workoutApiStore.stateLoader">
        <button class="btn" @click.prevent = workoutApiStore.newSearch(url,searchText)>старт</button>
        <button class="btn" @click.prevent = workoutApiStore.clear();clearModel()>Очистка</button>
        <div>
          <input type="text" v-model="searchText">
        </div>
      </div>
      <div class="mh" v-else>
        Идёт загрузка
      </div>
      <div v-if="workoutApiStore.citySet" class="videoContainer">
        <div class="videoItem" v-for="item in workoutApiStore.citySet">
          <div><strong>Название:</strong> {{item.value}} - {{item.data.code}}</div>
          <div><strong>Описание:</strong> {{item.unrestricted_value}}</div>
        </div>
      </div>
      <div>отслеживаемый объект testObservableStore.storeNum {{ObservableStore.storeNum}}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTrainingApiStore } from "~/store/TrainingApiPinia";
import { urlObservableStore } from "~/store/UrlObservable";
import {ref} from "vue";
import {useObservableStore} from "~/store/Observable";


const searchText = ref("")
const workoutApiStore = useTrainingApiStore();
const urlStore = urlObservableStore();
const url = ref('http://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/country');
const clearModel = ()=> {
  searchText.value = ''
}
const ObservableStore = useObservableStore()

onMounted(() => {
  console.log('ObservableStore training api getLocalUser',ObservableStore.getLocalUser())
});
setTimeout(()=>{
  console.log('ObservableStore training api setimaut',ObservableStore.user)
},100)
</script>

<style scoped lang="scss">
  .videoContainer{
    margin: 0;
  }
  .videoItem{
    border: solid 2px #000;
    margin: 15px 0;
    width: 45%;
    div{
      padding: 5px 10px;
      &:first-of-type{
        border-right: solid 2px #f5f5f5;
      }
    }
    strong{
      margin-right: 5px;
      display: block;
    }
  }

  .mh{
    min-height: 76px;
  }


</style>