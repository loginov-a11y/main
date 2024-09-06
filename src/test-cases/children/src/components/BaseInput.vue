<script setup lang="ts">

import { computed } from 'vue';

const props = defineProps({
  modelValue: {},
  inputType: String,
  text: String
});
const emit = defineEmits(['update:modelValue']);

const localComputed = computed({
  get() {
    return props.modelValue;
  },
  set(newValue) {
    emit('update:modelValue', newValue)
  }
})

</script>

<template>
  <label class="person">
    <span class="person__head">{{props.text}}</span>
    <input :type=props.inputType class="person__input" required v-model="localComputed">
  </label>
</template>

<style scoped lang="scss">
@import "../style";
</style>