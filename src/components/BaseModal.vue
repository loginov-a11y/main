<script setup lang="ts">

import {ref} from "vue";
const dialog = ref(true);
</script>

<template>
  <v-dialog v-model="dialog" max-width="500">
    <template v-slot:default="{ isActive }">
      <v-card title="Здравствуйте HR Менеджер">
        <v-card-text>
          Напишите ваше имя, Это не обязательно но так интереснее.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
              min-width="34px"
              text="&#x2716;"
              height="34px"
              @click="isActive.value = false"
          ></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>

<style scoped lang="scss">

</style>