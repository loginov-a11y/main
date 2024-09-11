<script setup>
import {ref} from "vue";
import {useChildrenVariableStore} from "./store/variableStore";
import {objectChildrenItemAdd, childrenLocalStoreSave} from "./src/staticFunction";
import {childrenLocalStoreGet} from "./src/asyncFunction";
import {LOCAL_STORE_NAME} from "./src/constant";
import BaseButton from "./src/components/BaseButton.vue";
import TheChildrenItem from "./src/components/TheChildrenItem.vue";
import BaseInput from "./src/components/BaseInput.vue";

const varStore = useChildrenVariableStore();

const name = 'Имя',
    age = 'Возраст',
    text = 'text',
    number = 'number';

const
    childrenName = ref(""),
    childrenAge = ref("");
(async function () {
  if (process.client) {
    varStore.childrenList = await childrenLocalStoreGet(LOCAL_STORE_NAME);
  }
})();

</script>

<template>
  <div class="container">
    <h3>Персональные данные</h3>
    <form class="person-form" @submit.prevent="objectChildrenItemAdd(childrenName,childrenAge)">

      <BaseInput
          v-model="childrenName"
          :input-type="text"
          :text="name"
      />

      <BaseInput
          v-model="childrenAge"
          :input-type="number"
          :text="age"
      />
      <div class="person-add">
        <h3>
          Дети (макс. 5)
        </h3>

        <BaseButton
            classStyle="btn person-add__button"
            type="submit"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M2.13332 7.85555C1.50125 7.85555 0.988866 8.36794 0.988867 9C0.988867 9.63206 1.50126 10.1445 2.13332 10.1445L7.85544 10.1445L7.85545 15.8668C7.85545 16.4989 8.36784 17.0113 8.9999 17.0113C9.63196 17.0113 10.1444 16.4989 10.1444 15.8668L10.1443 10.1445L15.8667 10.1445C16.4988 10.1445 17.0112 9.63207 17.0112 9.00001C17.0112 8.36795 16.4988 7.85556 15.8667 7.85556L10.1443 7.85556L10.1443 2.13338C10.1443 1.50132 9.63195 0.988927 8.99989 0.988927C8.36783 0.988927 7.85544 1.50131 7.85544 2.13338L7.85544 7.85555L2.13332 7.85555Z"
                  fill="#01A7FD"/>
          </svg>
          Добавить ребенка
        </BaseButton>
      </div>
    </form>
  </div>
  <div class="container">
    <div class="table"
         v-for="(item, index) in varStore.childrenList"
         :key="item.id"
    >
      <TheChildrenItem
          :children-name="item[0]"
          :children-age="item[1]"
          :children-index="index"
      />
    </div>
    <BaseButton
        classStyle="btn btn_blue"
        v-if="varStore.childrenList.length"
        @click="childrenLocalStoreSave(varStore.childrenList)"
    >
      Сохранить
    </BaseButton>
  </div>
</template>

<style scoped lang="scss">
@import "src/style";
</style>
