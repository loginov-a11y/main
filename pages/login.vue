<script setup lang="ts">
import {definePageMeta} from "#imports";
import BaseForm from "~/src/components/BaseForm.vue";

definePageMeta({
  middleware: "protected-auth-form"
})
</script>
<template>
  <div class="pageContainer">
    <h1>Авторизация</h1>
    <BaseForm/>
  </div>
</template>

<style scoped lang="scss">


</style>