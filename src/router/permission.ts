import {
  NavigationGuardNext,
  RouteLocationNormalized,
  Router
} from 'vue-router'

export const setupPermission = (router: Router) => {
  router.beforeEach(
    (
      to: RouteLocationNormalized,
      from: RouteLocationNormalized,
      next: NavigationGuardNext
    ) => {
      console.log(to)

      next()
    }
  )
}
