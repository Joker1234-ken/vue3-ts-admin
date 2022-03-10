import { defineStore } from 'pinia'

export const userStore = defineStore('user', {
  state: () => {
    return {
      roles: [], // 角色
      permissions: [] // 权限字符
    }
  },

  actions: {}
})
