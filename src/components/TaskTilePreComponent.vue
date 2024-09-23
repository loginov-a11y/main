<script setup lang="ts">
import {ref, onMounted} from "vue";

const props = defineProps({
  tileText: {
    type: String
  },
  styleBackground: {
    type: Object
  }
});

let tileStyle = ref({
  background: '',
  color: ''
});

onMounted(() => {
  tileStyle.value.background = props.styleBackground[0]
  tileStyle.value.color = props.styleBackground[1]
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