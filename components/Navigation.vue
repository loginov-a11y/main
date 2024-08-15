

<template>
  <div>
    <nav>
      <NuxtLink to="/">Главная</NuxtLink> |
      <NuxtLink to="/js_ts_task">js ts задачи</NuxtLink> |
      <NuxtLink to="/training">Задачи база</NuxtLink> |
      <NuxtLink to="/trainingApi">Задачи Api</NuxtLink> |
      <NuxtLink to="/wiki">Wiki js</NuxtLink> |
      <NuxtLink to="/login">Авторизация</NuxtLink> |
      <NuxtLink to="/admin">Админка</NuxtLink>
    </nav>
  </div>

</template>

<script setup lang="ts">

</script>

<style scoped>
  a{
    text-decoration: none;
    font-size: 16px;
    display: inline-block;
    margin: 0 10px;
    color: #fff;
  }


</style>