<script setup lang="ts">
import Header from "~/src/components/TheHeader.vue";
import Footer from "~/src/components/TheFooter.vue";
import {useVariableStore} from "~/store/variableStore";
import {useUserStore} from "~/store/UserStore";
import {localStoreGet} from "~/src/asyncFunction";
import {onMounted} from "vue";
const loadStore = useVariableStore();
const userStore = useUserStore();
onMounted(() => {
  (async function () {
    userStore.user = await localStoreGet('user');
  })();
})
import {definePageMeta} from "#imports";

onMounted(() => {
  definePageMeta({
    middleware: "protected-hh"
  })
  loadStore.pageLoader = false
})
import {watch} from "vue";
import ThePageLoader from "~/src/components/ThePageLoader.vue";


const route = useRoute()
watch(() => route, (newRoute) => {
  console.log('track route: ', newRoute.path)
}, { immediate: true, deep: true })
</script>

<template>
    <ThePageLoader v-if="loadStore.pageLoader"/>
    <Header/>
    <NuxtPage/>
    <Footer/>
</template>

<style scoped lang="scss"></style>