<script setup lang="ts">
import BaseCarousel from "~/src/components/BaseCarousel.vue";
import BaseButton from "~/src/components/BaseButton.vue";
import BaseDetails from "~/src/components/BaseDetails.vue";

const props = defineProps({
  projectArr: {
    type: Object
  }
});

const project = (item: any) => {
  return {
    projectName: item.project,
    projectDescription: item.project_description,
    projectLink: item.link,
    projectStack: item.stack,
    projectSlider: item.slider,
    projectTaskList: item.work
  }
}
const projectOut = project(props.projectArr)

</script>

<template>
  <div class="projectBorderWrap">
    <div class="project">
      <div class="project__slider">
        <BaseCarousel
            :show-arrows="false"
            :slider-list="projectOut.projectSlider"
        />
      </div>
      <div class="project__description">
        <h2>{{ projectOut.projectName }}</h2>
        <h4>{{ projectOut.projectDescription }}</h4>
        <hr>
        <section>
          <div><strong class="subHead">Стек:</strong></div>
          <div class="stag">
          <span v-for="item of projectOut.projectStack">
            {{ item }}
          </span>
          </div>
          <hr>
        </section>
        <section>
          <div><strong class="subHead">Что было сделано:</strong></div>
          <ol>
            <li v-for="item of projectOut.projectTaskList">{{ item }}</li>
          </ol>
          <hr>
        </section>
        <section>
          <div><strong class="subHead">Как проходила работа:</strong></div>
          <BaseDetails></BaseDetails>
          <hr>
        </section>
        <BaseButton
            :href="projectOut.projectLink"
        >
          Посетить сайт
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

.project {
  display: flex;
  margin: 5px;
  position: relative;
  z-index: 2;
  background: #fff;
  width: 100%;
  border-radius: 6px;
  overflow: hidden;
  &__slider, &__description {
    width: 50%;
  }
  &__description{
    padding: 20px;
  }
}
.projectBorderWrap{
  position: relative;
  overflow: hidden;
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 6px;
  &:before {
    content: "";
    display: block;
    background: linear-gradient(90deg, hsl(0deg 0% 100%) 0%, hsl(0deg 0% 0%) 100%);
    height: 2000px;
    width: 2000px;
    position: absolute;
    animation: rotate 8s linear infinite;
    z-index: 0;
  }
}

@keyframes rotate {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}
.stag{
  span{
    margin: 0 10px 0 0;
    &:last-of-type{
      margin-right: 0;
    }
  }
}
ol{
  padding: 0 0 0 30px;
}
hr{
  margin: 5px 0 15px;
  background: #305152;
  border: none;
  height: 1px;
}
</style>