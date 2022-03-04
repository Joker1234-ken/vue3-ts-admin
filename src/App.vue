<template>
  <el-config-provider size="default" :zIndex="3000" :locale="zhCn">
    <router-view></router-view>
  </el-config-provider>
</template>

<script setup lang="ts">
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
}

html,
body {
  height: 100vh;
  #app {
    height: 100%;
  }
}
</style>
