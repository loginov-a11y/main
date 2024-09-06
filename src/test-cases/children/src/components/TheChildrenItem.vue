<script setup lang="ts">

import {objectChildrenItemDelete} from "../../src/staticFunction";

const props = defineProps({
  childrenName: {type: String},
  childrenAge: {type: String},
  childrenIndex: {type: Number}
});
</script>

<template>
  <div class="person">
    <div class="person__head">Имя</div>
    <div class="person__out-text">{{ props.childrenName }}</div>
  </div>
  <div class="person">
    <div class="person__head">Возраст</div>
    <div class="person__out-text">{{ props.childrenAge }}</div>
  </div>
  <div class="person-del">
    <a href="" @click.prevent="objectChildrenItemDelete(props.childrenIndex)">Удалить</a>
  </div>
</template>

<style scoped lang="scss">
@import "../style";
</style>