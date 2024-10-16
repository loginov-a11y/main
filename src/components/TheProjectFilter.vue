<script setup lang="ts">
import {ref} from "vue";

const tickLabels = {
  0: '2022-2024', // 'ONE TOUCH'
  1: '2021-2022', // 'NOVARDIS'
  2: '2021-2021', // 'Фриланс'
  3: '2020-2021', // 'Биплан'
  4: '2019-2020', // 'Экоокна'
  5: '2017-2019', // 'Picom'
  6: '2016-2017', // 'BINET.PRO'
  7: '2015-2016', // 'Pulter'
  8: '2014-2015', // 'Фриланс'
  9: '2014-2014', // 'Везёт всем'
  10: '2011-2013', // 'Фриланс'
}
const thumbLabels = [
  'ONE TOUCH',
  'NOVARDIS',
  'Integroz',
  'Биплан',
  'Экоокна',
  'Picom',
  'BINET.PRO',
  'Фриланс',
  'Pulter',
  'Везёт всем',
  'Фриланс',
]
defineProps({
  modelValue: Array
});

let emit = defineEmits(['update:modelValue']);

const range = ref([0, thumbLabels.length - 1])

</script>

<template>
  <div class="range-labels">
    <div
        class="range-labels__wrap"
        v-for="label in thumbLabels"
    >
      <div class="range-labels__item">{{ label }}</div>
    </div>
  </div>
  <v-range-slider
      class="range"
      :max="10"
      :ticks="tickLabels"
      show-ticks="always"
      :step="1"
      min="0"
      v-model="range"
      @end="emit('update:modelValue', range)"
  />
</template>

<style scoped lang="scss">
.range {
  margin: 15px 40px 50px;
}

.range-labels {
  display: flex;
  padding: 0 40px;
  justify-content: space-between;
  position: relative;

  &__item {
    background: #353535a3;
    color: #fff;
    border-radius: 4px;
    padding: 0 5px;
    font-size: 14px;
    white-space: nowrap;
    width: fit-content;
    position: relative;

    &:before {
      display: block;
      position: absolute;
      content: '';
      width: 0;
      height: 0;
      border-left: 6px solid transparent;
      border-right: 6px solid transparent;
      border-top: 7px solid #353535a3;
      left: 0;
      right: 0;
      margin: 0 auto;
      top: 100%;
    }
  }

  &__wrap {
    width: 0;
    position: relative;
    display: flex;
    justify-content: center;
  }
}

</style>