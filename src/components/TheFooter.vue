<script setup lang="ts">
import {useHrStore} from "~/store/HrStore";

const hrStore = useHrStore();
</script>

<template>
  <v-footer
      app
      absolute
  >
    <div
        v-if="hrStore.hrName"
        class="hh"
    >{{ hrStore.hrName }}
    </div>
    <v-spacer></v-spacer>
    <div>Футтер &copy;</div>
  </v-footer>
</template>

<style scoped lang="scss">
footer {
  height: 60px;
  background-color: #f5f5f5;
  font-size: 20px;
  padding: 10px;
  box-sizing: border-box;
  width: 100%;
}

</style>