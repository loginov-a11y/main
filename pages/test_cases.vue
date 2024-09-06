<script setup lang="ts">
import { h1Search } from "~/src/functions";
import TheChildrenTestCases from "~/src/test-cases/children/TheChildrenTestCases.vue";
</script>

<template>
  <div class="pageContainer">
    <h1>{{h1Search(useRequestURL().pathname)}}</h1>
  </div>
  <div class="container">
    <h2>Добавление детей</h2>
    <br><br>
    <TheChildrenTestCases/>
  </div>


</template>

<style scoped lang="scss">

</style>