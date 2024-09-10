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
  set(newValue:any) {
    emit('update:modelValue', newValue.toString())
  }
})

</script>

<template>
  <label class="person">
    <v-text-field
        :type=props.inputType
        required
        v-model="localComputed"
        :label="props.text"
        variant="underlined"
        density="compact"
        hide-details="auto"
    />

  </label>
</template>

<style scoped lang="scss">
.person{
  border: 1px solid #F1F1F1;
  display: block;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin: 10px 0;
  min-width: 260px;

  &__head{
    display: block;
    color: #999999;
    font-size: 13px;
    font-weight: 400;
    line-height: 15.85px;
  }
  &__input{
    width: 100%;
  }
  &__out-text{
    color: #111;
  }
  &-del{
    a{
      color: #01A7FD;
      text-decoration: none;
    }
  }
}
</style>