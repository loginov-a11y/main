<script setup lang="ts">
import TheChildrenTestCases from "~/src/test-cases/children/TheChildrenTestCases.vue";
import TheCurConversionTestCase from "~/src/test-cases/currency-conversion/TheCurConversionTestCase.vue";
import BaseH1 from "~/src/components/BaseH1.vue";
</script>

<template>
  <div class="pageContainer">
    <BaseH1/>
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
      <summary class="btnAccordion">Задача - написать функционал для добавления удаления сохранения списка с детьми
      </summary>
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