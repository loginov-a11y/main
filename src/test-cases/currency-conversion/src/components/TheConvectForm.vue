<script setup lang="ts">

import {convert, searchBaseCurrency, toUpperCase} from "../../src/staticFunction";
import {ref} from "vue";
import {useConversionVariableStore} from "../../store/variableStore";

const observableCurren = useConversionVariableStore(),
    selectList = ref({}),
    currency = ref({}),
    currencyAll = ref({}),
    selectOne = ref(),
    selectTwo = ref(),
    outputCurrency = ref();
// (async function () {
//   currency.value = await observableCurren.getCurrency('https://status.neuralgeneration.com/api/currency');
//   selectList.value = currency.value[0].currencyName;
//   currencyAll.value = currency.value[1].currencyAll;
//   selectOne.value = searchBaseCurrency(selectList.value);
//   selectTwo.value = searchBaseCurrency(selectList.value);
// })();
// const convert = (currency = 0) => {
//   if (currency && selectTwo.value !== selectOne.value) {
//     outputCurrency.value = (currency / currencyAll.value[`${selectTwo.value}-${selectOne.value}`]);
//   }
// }
</script>

<template>
  <form class="convect-form" @change="convert()">
    <div class="convect-form__item">
      <label for="select1">
        <strong>У меня есть</strong>
      </label>
      <div class="convect-form__fun-block">
        <select class="select" id="select1" v-model="selectOne">
          <option
              v-for="key in observableCurren.currencyNameList"
              :value=key
          >{{ toUpperCase(key)}}</option>
        </select>
        <input type="number" pattern="[0-9]*" @keyup="convert($event.target.value)">
        <span>=</span>
        <span>{{outputCurrency }}</span>
      </div>
    </div>
    <div class="convect-form__item">
      <label for="select2">
        <strong>Хочу приобрести</strong>
      </label>
      <div class="convect-form__fun-block">
        <select class="select" id="select2" v-model="selectTwo">
          <option
              v-for="key in observableCurren.currencyNameList"
              :value=key>{{ toUpperCase(key)}}</option>
        </select>
        <input type="number" pattern="[0-9]*" @keyup="convert($event.target.value)">
        <span>=</span>
        <span>{{ outputCurrency }}</span>
      </div>
    </div>
  </form>
</template>

<style scoped lang="scss">
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
select{
  width: 150px;
  padding: 5px;
  font-size: 16px;
  cursor: pointer;
}

</style>