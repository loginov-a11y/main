<script setup lang="ts">
import {useVariableStore} from "~/store/variableStore";

const variableStore = useVariableStore();

</script>

<template>
  <div class="loader" v-if="variableStore.formStatusLoader"></div>
</template>

<style scoped lang="scss">
.loader {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  width: 200px;
  z-index: 0;
  background: url("~/assets/images/loader.gif") no-repeat center;
  height: 28px;
  background-size: 100%;
  margin: auto;
}
</style>