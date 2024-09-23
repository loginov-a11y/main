<script setup lang="ts"></script>

<template>
  <div class="shadow">
    <img src="../../assets/images/loaderPage.gif">
  </div>
</template>

<style scoped lang="scss">
.shadow {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  z-index: 2;
}

</style>