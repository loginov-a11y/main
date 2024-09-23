<script setup lang="ts">

import Navigation from "~/src/components/TheNavigation.vue";

</script>

<template>
  <v-app-bar
      class="border"
      color="#5f9ea0"
      prominent
  >
    <v-toolbar-title>
      <span>Nuxt3 Pinia Vuetify</span>
    </v-toolbar-title>
    <navigation/>
  </v-app-bar>
</template>

<style scoped lang="scss">
@import "assets/animateList";
</style>