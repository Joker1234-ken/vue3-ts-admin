<template>
  <el-container class="container">
    <el-aside width="256px">
      <Menu :menus="menus"></Menu>
    </el-aside>
    <el-container>
      <el-header class="header">Header</el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
// import { menuList } from '../../api/menu'
import { RouteRecordRaw } from 'vue-router'
import { routes } from '../router'
import Menu from './menu/index.vue'

const menus: RouteRecordRaw[] | undefined = routes[0].children

// const getMenuList = async () => {
//   const menus = await menuList()

// }

// getMenuList()
</script>

<style scoped lang="less">
.container {
  height: 100%;

  .header {
    border-bottom: 1px solid black;
  }
}
</style>
