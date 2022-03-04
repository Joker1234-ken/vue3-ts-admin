<template>
  <el-sub-menu
    v-for="submenus in menus"
    :key="submenus.path"
    :index="submenus.path"
  >
    <template #title>
      {{ (submenus.meta as any).title }}
    </template>
  </el-sub-menu>
</template>

<script setup lang="ts">
import { RouteRecordRaw } from 'vue-router'

interface Props {
  menus: RouteRecordRaw[]
}

withDefaults(defineProps<Props>(), {
  menus: () => []
})

const isArray = (arr: any) => {
  return Array.isArray(arr) && arr.length > 0
}
</script>

<style scoped></style>
