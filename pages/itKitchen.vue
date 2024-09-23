<script setup lang="ts">
import BaseH1 from "~/src/components/BaseH1.vue";
</script>

<template>
  <div class="pageContainer">
    <BaseH1/>
  </div>
</template>


<style scoped lang="scss">
.videoContainer {
  margin: 0;
}

.videoItem {
  border: solid 2px #000;
  margin: 15px 0;
  width: 45%;

  div {
    padding: 5px 10px;

    &:first-of-type {
      border-right: solid 2px #f5f5f5;
    }
  }

  strong {
    margin-right: 5px;
    display: block;
  }
}

.mh {
  min-height: 76px;
}


</style>