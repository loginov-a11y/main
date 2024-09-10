<script setup lang="ts">
import { h1Search } from "~/src/functions";
import TheChildrenTestCases from "~/src/test-cases/children/TheChildrenTestCases.vue";
import TheCurConversionTestCase from "~/src/test-cases/currency-conversion/TheCurConversionTestCase.vue";
</script>

<template>
  <div class="pageContainer">
    <h1>{{h1Search(useRequestURL().pathname)}}</h1>
  </div>
  <div class="container">
    <details class="taskItem">
      <summary class="btnAccordion">Конвертация валют</summary>
      <br>
      <div>
        <TheCurConversionTestCase/>
      </div>
    </details>
    <br>
  </div>
  <div class="container">
    <details class="taskItem">
      <summary class="btnAccordion">Добавление детей</summary>
      <br>
      <div>
        <TheChildrenTestCases/>
      </div>
    </details>
    <br>
  </div>




</template>

<style scoped lang="scss">

</style>