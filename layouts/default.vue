<script setup lang="ts">
import Header from "~/src/components/TheHeader.vue";
import Footer from "~/src/components/TheFooter.vue";
import {useVariableStore} from "~/store/variableStore";
import {localStoreGet} from "~/src/asyncFunction";

const loginStore = useVariableStore();
onMounted(() => {
  (async function () {
    loginStore.user = await localStoreGet('user');
  })();
})
</script>

<template>
    <Header/>
    <NuxtPage/>
    <Footer/>
</template>

<style scoped lang="scss"></style>