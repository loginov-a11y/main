<script setup lang="ts">
const props = defineProps({
  classStyle: {
    type: String
  }
});
</script>

<template>
  <v-btn
      :class="props.classStyle"
  >
    <slot/>
  </v-btn>
</template>

<style scoped lang="scss">

</style>