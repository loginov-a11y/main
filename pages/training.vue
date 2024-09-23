<script setup lang="ts">
import {ref} from 'vue';
import {useTrainingStore} from '~/store/TrainingPinia';
import BaseButton from "~/src/components/BaseButton.vue";
import BaseInput from "~/src/components/BaseInput.vue";
import {INPUT_TYPE} from "~/src/constant";
import BaseH1 from "~/src/components/BaseH1.vue";

const trainingStore = useTrainingStore();

const additionPlusOnce = ref(),
    additionPlusTwo = ref(),
    additionMulOnce = ref(),
    additionMulTwo = ref();

</script>

<template>
  <div class="pageContainer">
    <BaseH1/>
    <div>
      <h3>Прибавление
        <span v-if="additionPlusOnce">
        (
        {{ additionPlusOnce }}
        <span v-if="additionPlusTwo">+</span>
        {{ additionPlusTwo }}
        )
      </span>
      </h3>
      <div class="align-center d-inline-flex">
        <BaseInput
            v-model="additionPlusOnce"
            :inputType="INPUT_TYPE.number"
        />
        <div class="ml-4 mr-4">+</div>
        <BaseInput
            v-model="additionPlusTwo"
            :inputType="INPUT_TYPE.number"
        />
        <BaseButton
            @click="trainingStore.addition(additionPlusOnce,additionPlusTwo)"
            class="ml-4 mr-4"
        >=
        </BaseButton>
        <div>{{ trainingStore.additionSum }}</div>
      </div>
    </div>
    <div>
      <h3>Умножение
        <span v-if="additionMulOnce">
        (
        {{ additionMulOnce }}
        <span v-if="additionMulTwo">*</span>
        {{ additionMulTwo }}
        )
      </span>
      </h3>
      <div class="align-center d-inline-flex">
        <BaseInput
            v-model="additionMulOnce"
            :inputType="INPUT_TYPE.number"
        />
        <div class="ml-4 mr-4">*</div>
        <BaseInput
            v-model="additionMulTwo"
            :inputType="INPUT_TYPE.number"
        />
        <BaseButton
            @click="trainingStore.multiplication(additionMulOnce,additionMulTwo)"
            class="ml-4 mr-4"
        >=
        </BaseButton>
        <div>{{ trainingStore.additionMultiplier }}</div>
      </div>
      <div class="importTest">
        <button class="btn" @click="trainingStore.computedTestIncrease()">Computed test
          {{ trainingStore.computedTestNumber }}
        </button>
        <button class="btn">Watch test</button>
      </div>
    </div>
    <div>
      <h3>Таймер</h3>
    </div>
  </div>

</template>


<style scoped>

.importTest {
  border: solid 2px #000;
  padding: 10px;
}

.btn {
  margin: 10px 10px 10px 0;
  padding: 5px;
  font-size: 18px;
}
</style>