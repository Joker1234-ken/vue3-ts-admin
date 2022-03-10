<template>
  <div v-if="isArrayLen(menu.children)">
    <el-sub-menu
      v-for="menuItem in menu.children"
      :key="menuItem.path"
      :index="menu.path"
    >
      <template #title>
        {{ menu.meta?.title }}
      </template>

      <template v-if="isArrayLen(menu.children)">
        <MenuItem v-for="item in menu.children" :key="item.path" :menu="item" />
      </template>

      <el-menu-item v-else :index="menuItem.path" :key="menuItem.path">
        {{ menuItem.meta?.title }}
      </el-menu-item>
    </el-sub-menu>
  </div>

  <el-menu-item v-else :index="menu.path" :key="menu.path">
    {{ menu.meta?.title }}
  </el-menu-item>
</template>

<script setup lang="ts">
import { RouteRecordRaw } from 'vue-router'
import { isArrayLen } from '../../utils/tools'

interface Props {
  menu: RouteRecordRaw
}

defineProps<Props>()
</script>

<style scoped></style>
