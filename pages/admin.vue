<script setup lang="ts">
import {definePageMeta} from "#imports";
import {LogOut} from "~/src/functions";
import {localStoreDelete} from "~/src/storageFunction";
import BaseButton from "~/src/components/BaseButton.vue";
import {onMounted} from "vue";
onMounted(() => {
  definePageMeta({
    middleware: "protected-admin"
  })
})

</script>
<template>
  <div class="pageContainer">
    <h1>Админка</h1>
    <BaseButton
        @click="LogOut();localStoreDelete('user')"
    >
      Разлогинится
    </BaseButton>
  </div>
</template>
<style scoped></style>