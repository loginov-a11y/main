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
    <a href="" @click.prevent="objectChildrenItemDelete(props.childrenIndex!)">Удалить</a>
  </div>
</template>

<style scoped lang="scss">

.table{
  display: flex;
  width: 100%;
  align-items: center;
  grid-gap:15px;
  > div{
    &:last-of-type{
      grid-gap:0;
    }
  }
}
.person{
  border: 1px solid #F1F1F1;
  display: block;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  margin: 10px 0;
  min-width: 260px;

  &__head{
    display: block;
    color: #999999;
    font-size: 13px;
    font-weight: 400;
    line-height: 15.85px;
  }
  &__out-text{
    color: #111;
  }
  &-del{
    a{
      color: #01A7FD;
      text-decoration: none;
    }
  }
}
</style>