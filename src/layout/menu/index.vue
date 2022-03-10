<template>
  <el-aside width="256px">
    <el-menu
      router
      style="height: 100%"
      unique-opened
      :default-active="active"
      text-color="#fff"
      active-text-color="#ffd04b"
      background-color="#545c64"
    >
      <template v-for="menu in routes">
        <MenuItem v-if="!menu.meta?.hidden" :menu="menu" :key="menu.path" />
      </template>
    </el-menu>
  </el-aside>
</template>

<script setup lang="ts">
import { userRouterStore } from 'store'

import MenuItem from './menuItem.vue'

const { routes } = userRouterStore()

const active = computed(() => useRoute().fullPath)
</script>

<style scoped></style>
