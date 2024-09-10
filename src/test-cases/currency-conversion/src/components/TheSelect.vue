<script setup lang="ts">
import {useConversionVariableStore} from "../../store/variableStore";
import {watch, ref} from "vue";
import {select} from "../staticFunction";

const observableCurren = useConversionVariableStore(),
    currencyName = ref();

watch(() => observableCurren.fullCurrencyList, () => {
  currencyName.value = observableCurren.currencyNameList;
}, {deep: true});

</script>
<template>
    <v-select
        @update:modelValue="select"
        :items="currencyName"
        variant="outlined"
        density="compact"
        :width="150"
        hide-details
        class="pa-0 ma-0"
        >
    </v-select>
</template>

<style lang="scss">
.v-select__selection-text{
  text-transform: uppercase;
}

</style>