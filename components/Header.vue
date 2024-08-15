<script setup lang="ts">

import Navigation from "~/components/Navigation.vue";
</script>

<template>
  <header>
    <div class="header">
      <a href="" class="logo">
        Pinia
      </a>
      <navigation/>
    </div>

  </header>
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