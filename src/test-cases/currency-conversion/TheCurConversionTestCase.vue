<script setup>

import TheSelect from "./src/components/TheSelect.vue";
import {useConversionVariableStore} from "./store/variableStore";
import {watch, ref, onMounted} from "vue";
import {toUpperCase} from "./src/staticFunction";
import {startFunction} from "./src/mountFunction";


const observableCurren = useConversionVariableStore(),
    baseCurrency = ref(''),
    currencyList = ref([]);

watch(() => observableCurren.baseCurrency, () => {
  currencyList.value = observableCurren.sortCurrencyList;
  baseCurrency.value = observableCurren.baseCurrency;
}, {deep: true});

onMounted(() => {
  startFunction()
})

</script>

<template>
  <div class="container">
    <TheSelect/>
    <div>
      <h2>Актуальный курс для <span class="baseCurrency">{{ toUpperCase(baseCurrency) }}</span></h2>
      <div class="table">
        <div class="table__td"
             v-for="cur in currencyList"
             :key="cur.id"
        >
          {{ cur }}
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped lang="scss">
.table {
  &__td {
    border-bottom: solid 2px #d5d5d5;
    margin-bottom: 10px;
    padding: 0 0 0 10px;
  }
}

.baseCurrency {
  font-size: 20px;
}
.convect-form {
  &__item {
    margin: 15px 0;
  }

  label {
    display: block;
  }

  input {
    padding: 5px;
    margin: 0 0 0 15px;
    height: 32px;
  }

  &__fun-block {
    display: flex;
    align-items: center;
  }

  span {
    padding: 0 0 0 10px;
  }
}

.btn {
  height: 44px;
  padding: 10px 20px 10px 20px;
  border-radius: 100px;
  border: 2px;
  background: none;
  cursor: pointer;
  background: #f1f1f1;

  &:hover {
    background: #01A7FD;
    color: #fff;
  }
}

</style>