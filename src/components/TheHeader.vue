<script setup lang="ts">

import Navigation from "~/src/components/TheNavigation.vue";
</script>

<template>
    <v-app-bar
        color="#5f9ea0"
        prominent
    >
      <v-toolbar-title>Nuxt3 Pinia Vuetify</v-toolbar-title>
      <v-spacer></v-spacer>
      <navigation/>
    </v-app-bar>
</template>

<style scoped>
  .logo{
    font-size: 26px;
    font-family: "Roboto", sans-serif;
    text-decoration: none;
    color: #fff;
  }
  .header{
    width: 100%;
    height: 60px;
    background-color: cadetblue;
    font-size: 20px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
  }

</style>