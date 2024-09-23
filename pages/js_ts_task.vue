<script setup lang="ts">
import {randomBackground} from '~/src/functions';
import {getLiveTaskJson} from "~/src/liveTaskGetJson";
import {ref} from "vue";
import MasonryWall from '@yeger/vue-masonry-wall';
import TaskTileComponent from "~/src/components/TaskTilePreComponent.vue";
import TheTileModalContentComponent from "~/src/components/TheTileModalContentComponent.vue";
import BaseH1 from "~/src/components/BaseH1.vue";
import BaseCarousel from "~/src/components/BaseCarousel.vue";


const taskCode = ref(),
    taskTitle = ref(),
    taskList = await getLiveTaskJson(),
    searchTask = (taskId: number) => {
      taskCode.value = taskList.default[taskId][1]
      taskTitle.value = taskList.default[taskId][0]
    }

</script>
<template>
  <div class="pageContainer">
    <BaseH1/>
    <v-dialog
        width="fit-content"
    >
      <template v-slot:activator="{ props: activatorProps }">
        <masonry-wall :items="taskList.default" :ssr-columns="1" :column-width="300" :gap="16">
          <template #default="{ item, index }">
            <TaskTileComponent
                @mouseover="searchTask(index)"
                class="tile pa-2"
                v-bind="activatorProps"
                :key="index"
                :tile-text="item[0]"
                :styleBackground=randomBackground()
            />
          </template>
        </masonry-wall>
      </template>
      <template v-slot:default="{ isActive }">
        <BaseCarousel
            :show-arrows="false"
            height="auto"
            :slider-list="taskCode"
        >
          <template v-slot:default="slotProps">
            <TheTileModalContentComponent
                :code-task="slotProps.multiple"
                :code-title="taskTitle"
                :padding="true"
                @closed.once="isActive.value = false"
            />
          </template>
        </BaseCarousel>
      </template>
    </v-dialog>
  </div>
</template>

<style lang="scss">
.tile {
  cursor: pointer;

  &:hover {
    strong {
      color: #fff;
    }
  }

  strong {
    transition: 0.1s;
  }
}

.card-title {
  display: block;
  flex: none;
  font-size: 1.25rem;
  font-weight: 500;
  -webkit-hyphens: auto;
  hyphens: auto;
  letter-spacing: 0.0125em;
  min-width: 0;
  padding: 0.5rem 1rem;
  text-transform: none;
}

pre {
  font-size: 14px;
  color: black;
  font-weight: 900;
}
</style>