<script setup lang="ts">
import Header from "~/src/components/TheHeader.vue";
import Footer from "~/src/components/TheFooter.vue";
import ThePageLoader from "~/src/components/ThePageLoader.vue";
import hrWelcomeModal from "~/src/components/TheHrWelcomeModal.vue";
import {initFunction} from "~/src/mountFunction";
import {onMounted, ref} from "vue";
import { useHrStore } from "~/store/HrStore";

const hrStore = useHrStore();
let pageLoader = ref(true)
onMounted(() => {
  initFunction();
  pageLoader.value = false;
});

</script>
<template>
  <ThePageLoader v-if="pageLoader"/>
  <Header/>
  <NuxtPage/>
  <Footer/>
  <hrWelcomeModal v-if="hrStore.hrWelcomeModal"/>
</template>

<style scoped lang="scss"></style>