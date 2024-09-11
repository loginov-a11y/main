<script setup lang="ts">

import {convert, searchBaseCurrency, select, toUpperCase} from "../../src/staticFunction";
import {ref} from "vue";
import {useConversionVariableStore} from "../../store/variableStore";
import BaseInput from "~/src/test-cases/currency-conversion/src/components/BaseInput.vue";
import BaseSelect from "~/src/test-cases/currency-conversion/src/components/BaseSelect.vue";

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
      <v-sheet
          class="d-flex justify-space-between align-center"
          :width="400"
      >
        <v-sheet>
          <BaseSelect/>
        </v-sheet>
        <v-sheet>
          <BaseInput/>
        </v-sheet>
        <v-sheet>
          <span>=</span>
          <span>{{outputCurrency }}</span>
        </v-sheet>
      </v-sheet>
    </div>
    <div class="convect-form__item">
      <label for="select2">
        <strong>Хочу приобрести</strong>
      </label>
      <v-sheet
          class="d-flex justify-space-between align-center"
          :width="400"
      >
        <v-sheet>
          <BaseSelect/>
        </v-sheet>
        <v-sheet>
          <BaseInput/>
        </v-sheet>
        <v-sheet>
          <span>=</span>
          <span>{{outputCurrency }}</span>
        </v-sheet>
      </v-sheet>
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

  &__fun-block {
    display: flex;
    align-items: center;
  }

  span {
    padding: 0 0 0 10px;
  }
}

</style>