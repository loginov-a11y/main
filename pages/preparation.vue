<script setup lang="ts">
import {onMounted, ref} from "vue";
import BaseH1 from "~/src/components/BaseH1.vue";

import {preparationGetJson} from "~/src/preparationGetJson";
import {BASE_COLOR, INPUT_TYPE} from "~/src/constant";
import BaseButton from "~/src/components/BaseButton.vue";
import BaseInput from "~/src/components/BaseInput.vue";

const preparation = await preparationGetJson();
const list = preparation.default;
const selectFilter = ref([]);
const taskList = ref([]);
const showQuestion = ref([]);
const progressBarModel = ref(0);
const showIntervalQuestions = ref(1);
const disableButton = ref(true);
const testStatus = ref(false);


let stop = ref(false)

const selectCheck = (item: string) => {
  if (selectFilter.value.length === 0 || !selectFilter.value.includes(item)) {
    selectFilter.value.push(item)
  } else {
    selectFilter.value = selectFilter.value.filter((el) => el !== item)
  }
  disableButton.value = selectFilter.value.length === 0;
  for (let task of list) {
    selectFilter.value.forEach((item: string) => {
      if (task.tag === item) {
        taskList.value.push(task.list)
      }
    })
  }
  taskList.value = taskList.value.flat();
}


const nextTask = () => {
  showQuestion.value = taskList.value.shift();
  if (taskList.value.length === 0) {
    stop.value = true;
  }
}


const testStart = (time: number) => {
  testStatus.value = true;
  taskList.value = taskList.value.sort(() => Math.random() - 0.5);
  let milliseconds = time * 60000 * (showQuestion.value.time || 1);

  nextTask();

  function questionSliderFunction() {
    progressBarModel.value = ++progressBarModel.value;
    if (progressBarModel.value >= 100) {
      progressBarModel.value = 0
      nextTask();
    }
  }

  const questionSlider = setInterval(() => {
    questionSliderFunction();
  }, milliseconds / 100);
  if (stop.value) {
    setTimeout(() => {
      clearInterval(questionSlider)
    }, milliseconds - 10)
  }
}
const nextQuestions = () => {
  progressBarModel.value = 100;
}
onMounted(() => {


})

</script>
<template>
  <div class="pageContainer">
    <BaseH1/>
    <div class="preparation">
      <div class="preparation__list">
        <label>
          <span>
            Интервал между вопросами в минутах,<br> базовый интервал 1 минута
          </span>
          <BaseInput
              v-model="showIntervalQuestions"
              :inputType="INPUT_TYPE.number"
          />
        </label>
        <div
            v-for="item of list"
        >
          <v-checkbox
              density="compact"
              hide-details
              :color="BASE_COLOR"
              :value="item.tag"
              :label="item.name"
              @change="selectCheck(item.tag)"
          />
        </div>
        <div>
          <BaseButton
              @click="testStart(showIntervalQuestions)"
              :disabled='disableButton'
          >
            начать
          </BaseButton>
        </div>
      </div>
      <div class="preparation__task">
        <div class="card-task__wrap">
          <div v-if="testStatus">Осталось вопросов {{ taskList.length }}</div>
          <div
              v-if="testStatus"
              class="card-task">
            <v-progress-linear
                v-model="progressBarModel"
                height="10"
                class="question_time_progress"
            ></v-progress-linear>
            <details class="taskItem">
              <summary class="btnAccordion">{{ showQuestion.question }}</summary>
              <br>
              <div>
                {{ showQuestion.answer }}
              </div>
            </details>
            <BaseButton
                @click="nextQuestions()"
            >
              Далее
            </BaseButton>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.card-task {
  display: block;
  position: relative;
  box-shadow: 0 0 10px #ababab;
  border-radius: 10px;
  padding: 15px;
  margin-top: 15px;

  &__wrap {
    width: 50%;
    margin: 20px auto;
  }
}

.taskItem {
  position: relative;
  z-index: 2;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 25px;
}

.preparation {
  display: flex;
  align-items: flex-start;

  &__list {
    width: 20%;
  }

  &__task {
    width: 80%;
  }
}

.question_time_progress {
  position: absolute;
  left: 0;
  margin: 0 0 0;
  border-radius: 10px 10px 0 0;
}

</style>