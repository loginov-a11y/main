<script setup lang="ts">
import BaseH1 from "~/src/components/BaseH1.vue";
import TheAddition from "~/src/components/TheAddition.vue";
import TheMultiplication from "~/src/components/TheMultiplication.vue";
</script>

<template>
  <div class="pageContainer">
    <BaseH1/>
    <div>
      <TheAddition/>
    </div>
    <div>
      <TheMultiplication/>
    </div>
    <div>
      <h3>Таймер</h3>
    </div>
  </div>
</template>


<style scoped>

</style>