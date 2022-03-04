import {
  createRouter,
  createWebHistory,
  Router,
  RouteRecordRaw
} from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/layout/index.vue'),
    meta: { hidden: false },
    children: [
      {
        path: 'view',
        component: () => import('src/layout/view/index.vue'),
        meta: { title: '测试1' },
        children: [
          {
            path: 'view',
            component: () => import('src/layout/view/index.vue'),
            meta: { title: '测试2' },
            children: [
              {
                path: 'view',
                component: () => import('src/layout/view/index.vue'),
                meta: { title: '测试3' },
                children: [
                  {
                    path: 'view',
                    component: () => import('src/layout/view/index.vue'),
                    meta: { title: '测试4' },
                    children: [
                      {
                        path: '/about',
                        component: () => import('src/views/about/index.vue'),
                        meta: { title: 'about' }
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
    meta: { hidden: true }
  }
]

export const router: Router = createRouter({
  history: createWebHistory(),
  routes
})

export { routes }
