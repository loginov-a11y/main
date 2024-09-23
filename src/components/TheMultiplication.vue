<script setup lang="ts">

import {INPUT_TYPE} from "~/src/constant";
import {ref} from "vue";
import BaseInput from "~/src/components/BaseInput.vue";
import BaseButton from "~/src/components/BaseButton.vue";

const
    additionMulOnce = ref(),
    additionMulTwo = ref(),
    additionMultiplier = ref();
const multiplication = (one = 0, two = 0) => {
  additionMultiplier.value = one * two
}
</script>

<template>
  <h3>Умножение
    <span v-if="additionMulOnce">
        (
        {{ additionMulOnce }}
        <span v-if="additionMulTwo">*</span>
        {{ additionMulTwo }}
        )
      </span>
  </h3>
  <div class="align-center d-inline-flex">
    <BaseInput
        v-model="additionMulOnce"
        :inputType="INPUT_TYPE.number"
    />
    <div class="ml-4 mr-4">*</div>
    <BaseInput
        v-model="additionMulTwo"
        :inputType="INPUT_TYPE.number"
    />
    <BaseButton
        @click="multiplication(additionMulOnce,additionMulTwo)"
        class="ml-4 mr-4"
    >=
    </BaseButton>
    <div>{{ additionMultiplier }}</div>
  </div>
</template>

<style scoped lang="scss">

</style>