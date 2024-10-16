<script setup lang="ts">
import {ref, watch} from "vue";
import BaseH1 from "~/src/components/BaseH1.vue";
import {projectGetJson} from "~/src/projectGetJson";
import TheIndexTileProjectComponent from "~/src/components/TheIndexTileProjectComponent.vue";
import TheRangeSlider from "~/src/components/TheProjectFilter.vue";

const projectList = await projectGetJson();
let projectListArr = ref(projectList.default.flat());
const modelValue = ref();

watch(() => modelValue, () => {
  console.log('projectListArr',projectList.default)
  projectListArr.value = projectList.default.slice(modelValue.value[0], modelValue.value[1] + 1).flat();
}, {deep: true});

</script>

<template>
  <div class="pageContainer">
    <BaseH1/>


    <TheRangeSlider
        v-model="modelValue"
    />
    <div class="projectList">
        <TheIndexTileProjectComponent
            v-for="item of projectListArr"
            :key="item.id"
            :projectArr="item"
        />
    </div>
  </div>
</template>
<style lang="scss">
.projectList {
  & > div {
    &:nth-child(odd) {
      & > div {
        flex-direction: row-reverse;
        .btn-wrap{
          text-align: left;
        }
      }
    }
  }
}

</style>