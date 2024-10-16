<script setup lang="ts">

import {IMG_LIST} from "~/src/constant";

const props = defineProps({
  sliderList: {
    type: Object
  },
  sliderImg:{
    type:Boolean
  }
});
const validateBackground = (str:string) => {
  let link = '';
  IMG_LIST.forEach(item =>{
    if(str.indexOf(item) > 0){
      link = str
    }
  })
  return link;
}
</script>
<template>
  <v-carousel>
    <v-carousel-item
        contain
        v-for="item of props.sliderList"
        :src="validateBackground(item)"
    >
      <slot :multiple="item"/>
    </v-carousel-item>
  </v-carousel>
</template>

<style scoped lang="scss"></style>