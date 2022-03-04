<template>
  <el-menu router style="height: 100%">
    <template v-for="menu in menus">
      <template v-if="menu.meta && !menu.meta.hidden">
        <template v-if="!isArray(menu.children)">
          <el-menu-item :index="menu.path" :key="menu.path">
            {{ menu.meta.title }}
          </el-menu-item>
        </template>

        <template v-else>
          <SubMenu :menus="menu.children"></SubMenu>
        </template>
      </template>
    </template>
  </el-menu>
</template>

<script setup lang="ts">
import { RouteRecordRaw } from 'vue-router'
import SubMenu from './subMenu.vue'

interface Props {
  menus: RouteRecordRaw[]
}

const props = withDefaults(defineProps<Props>(), {
  menus: () => []
})

const isArray = (arr: any) => {
  return Array.isArray(arr) && arr.length > 0
}

console.log(props)
</script>

<style scoped></style>
