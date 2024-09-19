<script setup lang="ts">
import Header from "~/src/components/TheHeader.vue";
import Footer from "~/src/components/TheFooter.vue";
import ThePageLoader from "~/src/components/ThePageLoader.vue";
import {useVariableStore} from "~/store/variableStore";
import {initFunction} from "~/src/mountFunction";
import {onMounted} from "vue";
import { useHrStore } from "~/store/HrStore";
import hrWelcomeModal from "~/src/components/TheHrWelcomeModal.vue";

const variableStore = useVariableStore();
const hrStore = useHrStore()
onMounted(() => {
  initFunction();
});

</script>
<template>
  <ThePageLoader v-if="variableStore.pageLoader"/>
  <Header/>
  <NuxtPage/>
  <Footer/>
  <hrWelcomeModal v-if="hrStore.hrWelcomeModal"/>
</template>

<style scoped lang="scss"></style>