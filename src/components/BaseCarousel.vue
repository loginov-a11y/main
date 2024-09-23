<script setup lang="ts">

const props = defineProps({
  sliderList: {
    type: Object
  }
});

</script>
<template>
  <v-carousel

  >
    <v-carousel-item
        cover
        v-for="item of props.sliderList"
    >
      <slot :multiple="item"/>
    </v-carousel-item>
  </v-carousel>
</template>

<style scoped lang="scss">
.v-carousel__controls{
  display: none !important;
}
</style>