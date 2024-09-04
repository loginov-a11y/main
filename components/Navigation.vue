<script setup lang="ts">
import {useVariableStore} from "~/store/variableStore";
const loginStore = useVariableStore();
import {NAV_ITEMS} from "~/constant";
</script>
<template>
  <div>
    <nav>
      <NuxtLink v-for="item of NAV_ITEMS" :to=item.page>{{item.name}}</NuxtLink>
      <NuxtLink v-if="!loginStore.user.authStatus" to="/login">Авторизация</NuxtLink>
      <NuxtLink v-if="loginStore.user.authStatus" to="/admin">Админка</NuxtLink>
    </nav>
  </div>
</template>



<style scoped lang="scss">
  a{
    text-decoration: none;
    font-size: 16px;
    display: inline-block;
    margin: 0 10px;
    color: #fff;
    border-right: 2px solid #305152;
    padding-right: 10px;
    &:last-of-type{
      border-right: none;
    }
  }


</style>