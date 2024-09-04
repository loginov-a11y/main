

<template>
  <Header/>
  <NuxtPage/>
  <Footer/>
</template>

<script setup lang="ts">

import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import {useVariableStore} from "~/store/variableStore";
const loginStore = useVariableStore();

onMounted(() => {
  loginStore.user = JSON.parse(localStorage.getItem('user')|| '{}')
})

</script>

<style scoped>

</style>