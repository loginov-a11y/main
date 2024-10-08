<script setup lang="ts">
import {ref,defineExpose} from "vue";
const status = ref(false);

const detailsContent = ref();
const test = ref()
const open = (el:any) => {
  test.value = detailsContent.value.clientHeight;
  status.value = status.value === false;
}
defineExpose({ detailsContent })
</script>

<template>
  <div class="details">
    <div class="details__head" @click="open($event)">Заголовок</div>
    <div class="details__wrap" :class="{ _open: status }">
      <div
          class="details__content"


          ref="detailsContent"
      >
        zzxzx  zx zxc z <br>
        zzxzx  zx zxc z <br>
        zzxzx  zx zxc z <br>
        zzxzx  zx zxc z <br>
        zzxzx  zx zxc z <br>
        zzxzx  zx zxc z <br>
        zzxzx  zx zxc z <br>
        zzxzx  zx zxc z <br>
        zzxzx  zx zxc z <br>
        zzxzx  zx zxc z <br>
        zzxzx  zx zxc z <br>
        zzxzx  zx zxc z <br>
        zzxzx  zx zxc z <br>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.details{
  &__head{
    font-weight: bold;
    cursor: pointer;
  }
  &__wrap{
    max-height: 100px;
    position: relative;
    overflow: hidden;
    transition: 1s;
    &._open{
      height: auto;
    }
  }
}

</style>