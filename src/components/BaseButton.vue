<script setup lang="ts">

const props = defineProps({
  status: {
    type: Boolean
  }
});

</script>

<template>
  <v-btn
      class="animate-pulse-warning"
  >
    <slot/>
  </v-btn>
</template>

<style scoped lang="scss">
@import "assets/animateList";
button{
  border: solid 1px #000;
}
</style>

