<script setup lang="ts">
const props = defineProps({
  codeTitle: {
    type: String
  },
  codeTask: {
    type: Array
  }
});

</script>

<template>
  <v-card>
    <h3
        class="card-title mr-16"
    >{{props.codeTitle}}</h3>
    <v-card-text>
            <pre>
              {{props.codeTask}}
            </pre>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
          class="position-absolute top-0 right-0"
          height="50px"
          width="50px"
          text="&#x2716;"
          density="compact"
          @click="$emit('closed')"
      ></v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped lang="scss">

</style>