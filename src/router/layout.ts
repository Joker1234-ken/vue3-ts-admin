import { RouteRecordRaw } from 'vue-router'

const appMain = (children: RouteRecordRaw[] = []) => ({
  path: '/',
  name: 'Layout',
  component: () => import('src/layout/index.vue'),
  meta: { hidden: false },
  children
})

export default appMain
