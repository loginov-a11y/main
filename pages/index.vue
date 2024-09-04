<script setup lang="ts">
import { h1Search } from "~/functions";
</script>

<template>
  <div class="pageContainer">
    <h1>{{h1Search(useRequestURL().pathname)}}</h1>
  </div>

</template>

<style scoped>

</style>