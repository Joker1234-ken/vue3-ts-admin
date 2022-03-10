import { userRouterStore } from 'store'
import { isLogin } from '../utils/auth'
import {
  NavigationGuardNext,
  RouteLocationNormalized,
  Router
} from 'vue-router'
import { getMenuList } from '../api/menu'
import { userStore } from '../store/modules/user'
import { getUserInfo } from '../api/login'

// todo 白名单
const whiteList: string[] = ['/login']

export const setupPermission = (router: Router) => {
  router.beforeEach(
    (
      to: RouteLocationNormalized,
      from: RouteLocationNormalized,
      next: NavigationGuardNext
    ) => {
      if (isLogin()) {
        const { roles } = userStore()
        if (roles.length === 0) {
          getUserInfo().then(res => {
            console.log(res)
          })
        }

        // const routerStore = userRouterStore()
        // getMenuList().then(result => {
        //   if (result.code === 0) {
        //     routerStore.addRoute(router, result.data)
        //     next({ ...to })
        //   }
        // })
        next()
      } else {
        if (whiteList.includes(to.path)) {
          next()
        } else {
          next('/login')
        }
      }
    }
  )
}
