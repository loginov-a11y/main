<script setup lang="ts">
import {h1Search} from "~/src/functions";
</script>

<template>
  <h1>{{ h1Search(useRequestURL().pathname) }}</h1>
</template>

<style scoped lang="scss">

</style>