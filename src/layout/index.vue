<template>
  <el-container class="container">
    <Menu></Menu>

    <Main></Main>
  </el-container>
</template>

<script setup lang="ts">
import Menu from './menu/index.vue'
import Main from './main/index.vue'
</script>

<style scoped lang="less">
.container {
  height: 100%;
}
</style>
