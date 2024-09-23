<script setup lang="ts">
import {ref} from "vue";
import BaseInput from "~/src/components/BaseInput.vue";
import {useHrStore} from "~/store/HrStore";
import {localStoreSet} from "~/src/storageFunction";

const hrStore = useHrStore();
const dialog = ref(true);
const dialogText: string = 'Имя';
const hrNameValue = ref('');
const nameChange = (val: string) => {
  hrStore.hrName = val;
  localStoreSet('hh',val);
};
</script>
<template>
  <v-dialog v-model="dialog" max-width="500">
    <template v-slot:default="{ isActive }">
      <v-card title="Здравствуйте HR Менеджер">
        <v-card-text>
          Напишите ваше имя, Это не обязательно но так интереснее.
          <base-input
              :value="dialogText"
              v-model="hrNameValue"
              @change="nameChange(hrNameValue)"
          />
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