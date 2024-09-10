<script setup lang="ts">
import {convert, searchBaseCurrency, select, toUpperCase} from "../../src/staticFunction";
import {ref} from "vue";
import {useConversionVariableStore} from "../../store/variableStore";

const observableCurren = useConversionVariableStore(),
    selectList = ref({}),
    currency = ref({}),
    currencyAll = ref({}),
    selectOne = ref(),
    selectTwo = ref(),
    outputCurrency = ref();

</script>

<template>
  <v-select
      @update:modelValue="selectOne"
      :items="observableCurren.currencyNameList"
      variant="underlined"
      id="select1"
      density="compact"
      hide-details
      :width="150"
      class="pa-0 ma-0"
  >
  </v-select>
</template>

<style scoped lang="scss">

</style>