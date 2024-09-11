<script setup lang="ts">
import {ref,onMounted} from "vue";
import { randomBackground } from "~/src/functions";

const props = defineProps({
  tileText: {
    type:String
  }
});

let tileStyle = {
  background: '',
  color: ''
};
onMounted(() => {
  const backgroundSet = randomBackground();
  tileStyle.background = backgroundSet[0]
  tileStyle.color = backgroundSet[1]
})

</script>

<template>
  <div
      :style="tileStyle"
  >
    <strong>{{ props.tileText }}</strong>
  </div>

</template>

<style scoped lang="scss">

</style>