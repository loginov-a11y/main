<script setup lang="ts">
import {BUTTON_STATUS_BASE} from "~/src/constant";
import {BUTTON_STATUS_ERROR} from "~/src/constant";
import {BUTTON_STATUS_SUCCESS} from "~/src/constant";

const statusButton = {
  [BUTTON_STATUS_BASE]: '',
  [BUTTON_STATUS_ERROR]: '',
  [BUTTON_STATUS_SUCCESS]: '',
}
const props = defineProps({
  status: {
    type: Boolean
  }
});
</script>

<template>
  <v-btn class="btn button-neutral">
    <slot/>
  </v-btn>
</template>

