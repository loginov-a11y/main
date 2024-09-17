<script setup>
import {h1Search, randomBackground} from '~/src/functions'
import {getLiveTaskJson} from "~/src/liveTaskGetJson";
import {ref} from "vue";
import MasonryWall from '@yeger/vue-masonry-wall';
import TaskTileComponent from "~/src/components/TaskTileComponent.vue";
const taskCode = ref()
const taskTitle = ref('');
const taskList = await getLiveTaskJson();



const searchTask = (taskId) => {

  if(taskList.default[taskId][1].length === 2){
    //console.log('taskList.default[taskId]',taskList.default[taskId][1])
  }
  taskCode.value = taskList.default[taskId][1][0][1]
  taskTitle.value = taskList.default[taskId][0]
}


</script>
<template>
  <div class="pageContainer">
    <h1>{{h1Search(useRequestURL().pathname)}}</h1>
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
                :key="item"
                :tile-text="item[0]"
                :styleBackground = randomBackground()
            />
          </template>
        </masonry-wall>
      </template>
      <template v-slot:default="{ isActive }">
        <v-card>
          <h3 class="card-title">{{taskTitle}}</h3>
          <v-card-text>
            <pre>
              {{taskCode}}
            </pre>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                text="Закрыть"
                @click="isActive.value = false"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </div>
</template>

<style lang="scss">
.tile{
  cursor: pointer;
  &:hover{
    strong{
      color: #fff;
    }
  }
  strong{
    transition: 0.1s;
  }
}

.card-title{
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
pre{
  font-size: 14px;
  color: black;
  font-weight: 900;
}
</style>