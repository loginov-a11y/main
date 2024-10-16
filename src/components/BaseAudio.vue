<script setup lang="ts">

import {ref, computed, onMounted} from "vue";

const props = defineProps({
  audioLink: {
    type: String
  }
});

const audioSrc = computed(() => {
  const path = new URL('@/assets/audio', import.meta.url);
  return `${path}/${props.audioLink}`
});



</script>

<template>
  <audio autoplay>
    <source
        :src="audioSrc"
    >
  </audio>

</template>

<style scoped lang="scss">

</style>