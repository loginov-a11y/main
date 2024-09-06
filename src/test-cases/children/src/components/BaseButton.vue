<script setup lang="ts">
const props = defineProps({
  classStyle: {
    type: String
  }
});
</script>

<template>
  <button :class="props.classStyle">
    <slot/>
  </button>
</template>

<style scoped lang="scss">

</style>