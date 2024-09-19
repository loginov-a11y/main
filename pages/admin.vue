<script setup lang="ts">
import {definePageMeta} from "#imports";
import {LogOut} from "~/src/functions";

onMounted(() => {
  definePageMeta({
    middleware: "protected-admin"
  })
})
</script>
<template>
  <div class="pageContainer">
    <h1>Админка</h1>
    <button @click="LogOut('user')">разадминится</button>
  </div>
</template>
<style scoped></style>