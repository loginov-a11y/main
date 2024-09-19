<script setup lang="ts">
import {ref} from "vue";

const props = defineProps({
  inputType: {
    type: String
  },
  value: {
    type: String
  }
});
let value = ref()

</script>

<template>
  <v-text-field
      v-if="props.inputType === 'number'"
      required
      variant="underlined"
      density="compact"
      hide-details
      class="pa-0 ma-0"
      :width="150"
      :type=props.inputType
      v-model.number="value"
  />
  <v-text-field
      v-else
      required
      variant="underlined"
      density="compact"
      hide-details
      class="pa-0 ma-0"
      :width="150"
      :type=props.inputType
      :placeholder="props.value"
  />
</template>

<style scoped lang="scss"></style>