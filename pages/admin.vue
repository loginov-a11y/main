

<template>
  <div class="pageContainer">
    <h1>Админка</h1>
    <button @click="admin.logOut()">разадминится</button>
  </div>
</template>



<script setup lang="ts">
  import {definePageMeta} from "#imports";
  import { storeAdmin } from "~/store/admin";
  const admin = storeAdmin()

  onMounted(() => {
    definePageMeta({
      middleware: "protected-admin"
    })
  })


</script>

<style scoped>

</style>