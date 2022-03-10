import { App } from 'vue'
import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw
} from 'vue-router'
import { setupPermission } from './permission'
import appMain from './layout'

export const routes: RouteRecordRaw[] = [
  appMain([
    {
      path: '/',
      meta: { title: '首页' },
      component: () => import('../views/home/index.vue')
    }
  ]),
  {
    path: '/login',
    meta: { hidden: true },
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
    meta: { hidden: true }
  }
]

const router: Router = createRouter({
  history: createWebHistory(),
  routes
})

export const setupRouter = (app: App) => {
  setupPermission(router)

  app.use(router)
}

export default router
