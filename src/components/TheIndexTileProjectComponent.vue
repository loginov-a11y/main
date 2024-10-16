<script setup lang="ts">
import BaseCarousel from "~/src/components/BaseCarousel.vue";
import BaseButton from "~/src/components/BaseButton.vue";
import BaseDetails from "~/src/components/BaseDetails.vue";

const props = defineProps({
  projectArr: {
    type: Object
  }
});
const subHead = 'Как проходила работа:';
const project = (item: any) => {
  return {
    projectName: item.project,
    projectDescription: item.project_description,
    projectLink: item.link,
    projectStack: item.stack,
    projectSlider: item.slider,
    projectTaskList: item.work,
    darkTime: item.no_info,
    workflow: item.workflow
  }
}
const projectOut = project(props.projectArr)

</script>

<template>
  <div class="projectBorderWrap">
    <div class="project">
      <div class="project__slider">
        <div
            v-if="projectOut.darkTime"
            class="dark_time"
        >

        </div>
        <BaseCarousel
            v-else
            :show-arrows="false"
            :slider-list="projectOut.projectSlider"
        />
      </div>
      <div
          class="project__description"
          :class="{dark_time:projectOut.darkTime}"
      >
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
        <section
            v-if="projectOut.projectTaskList.length !== 0"
        >
          <div><strong class="subHead">Что было сделано:</strong></div>
          <ol>
            <li v-for="item of projectOut.projectTaskList">{{ item }}</li>
          </ol>
          <hr>
        </section>
        <section
            v-if="projectOut.workflow">
          <BaseDetails
              :header="subHead"
          >
            {{projectOut.workflow}}
          </BaseDetails>
          <hr>
        </section>
        <div
            class="btn-wrap"
            v-if="projectOut.projectLink"
        >
          <hr>
          <BaseButton
              :href="projectOut.projectLink"
          >
            Посетить сайт
          </BaseButton>
        </div>
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
  min-height: 400px;
  border: solid 4px #5f9ea0;
  &__slider, &__description {
    width: 50%;
    position: relative;
  }
  &__description{
    padding: 20px;
    &.dark_time{
      .details{
        width: 70%;
      }
      section{
        position: relative;
        &:last-of-type{
          &:after{
            display: block;
            content: '';
            background: url("~/assets/images/saimon/not_work.webp") no-repeat;
            width: 200px;
            height: 200px;
            background-size: contain;
            scale: -1 1;
            position: absolute;
            right: 0;
            top: 0;
          }
        }
      }
    }
    section{
      &:last-of-type{
        hr{
          display: none;
        }
      }
    }
  }
  &__slider{
    .dark_time{
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background: #f3f3f314;
      &:before,&:after{
        content: '';
        display: block;
        position: absolute;
      }
      &:before{
        background: url("~/assets/images/saimon/saimon_sadness.png") no-repeat;
        background-size: contain;
        width: 200px;
        height: 95px;
        bottom: 0;
        right: 50%;
      }
      &:after{
        background: url("~/assets/images/saimon/web.png") no-repeat;
        background-size: contain;
        width: 250px;
        height: 234px;
        left: 0;
        top: 0;
      }
    }
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

.btn-wrap{
  text-align: right;
  .v-btn {}
}
</style>