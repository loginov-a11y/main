

<template>
  <Header/>
  <NuxtPage/>
  <Footer/>
</template>

<script setup lang="ts">

import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";
import {useObservableStore } from "~/store/Observable";
const ObservableStore = useObservableStore();

onMounted(() => {
  ObservableStore.user = JSON.parse(localStorage.getItem('user')|| '{}')

})

</script>

<style scoped>

</style>