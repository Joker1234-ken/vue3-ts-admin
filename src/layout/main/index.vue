<template>
  <el-container class="main">
    <Header></Header>

    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import Header from '../header/index.vue'
</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column;
}
</style>
