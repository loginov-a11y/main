<script setup lang="ts">
import {useUserStore} from "~/store/UserStore";

const userStore = useUserStore();
import {NAV_ITEMS} from "~/src/constant";
</script>
<template>
  <nav>
    <NuxtLink
        v-for="item of NAV_ITEMS"
        :to=item.page
        :key="item.page"
    >{{ item.name }}
    </NuxtLink>
    <NuxtLink v-if="!userStore.user.authStatus" to="/login">Авторизация</NuxtLink>
    <NuxtLink v-if="userStore.user.authStatus" to="/admin">Админка</NuxtLink>
  </nav>
</template>


<style scoped lang="scss">

a {
  text-decoration: none;
  font-size: 16px;
  display: inline-block;
  margin: 0 10px;
  color: #fff;
  border-right: 2px solid #305152;
  padding-right: 10px;

  &:last-of-type {
    border-right: none;
  }
}


</style>