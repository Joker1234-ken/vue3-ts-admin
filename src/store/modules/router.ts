import { defineStore } from 'pinia'
import { Router, RouteRecordRaw } from 'vue-router'
import { RouterType } from './types'
const modules = import.meta.glob('../../views/*/*.vue')

const toMenuTree = (menus: RouterType[]): RouteRecordRaw[] => {
  const menuTree: RouteRecordRaw[] = []

  menus.forEach(ele => {
    if (!ele.p_id) return menuTree.push(nodeObj(ele))
    // 在树形数组上查找ele的父级节点对象
    const obj = getElementById(menuTree, ele.p_id)
    // 如果找到了，添加到这个节点的children属性中
    obj && obj.children.push(nodeObj(ele))
  })

  return menuTree
}

const getElementById = (arr: any[], id: number): any => {
  for (const ele of arr) {
    if (ele.meta.id === id) {
      return ele
    } else if (ele.children.length > 0) {
      const temp = getElementById(ele.children, id)
      if (temp) {
        return temp
      } else {
        continue
      }
    }
  }
}

const nodeObj = (ele: RouterType): RouteRecordRaw => {
  return {
    name: ele.path,
    path: `/${ele.path}`,
    component: loadView(ele.component),
    meta: {
      id: ele.id,
      icon: ele.icon,
      title: ele.title
    },
    children: ele.component !== 'view' ? undefined : []
  }
}

const loadView = (view: string) => {
  // 路由懒加载
  if (view === 'view') {
    return () => import('src/layout/view/index.vue')
  } else {
    return modules[`../../views/${view}/index.vue`]
  }
}

interface RouterState {
  routes: RouteRecordRaw[]
}

interface RouterActive {
  addRoute: (router: Router, routes: RouterType[]) => void
}

export const userRouterStore = defineStore<
  string,
  RouterState,
  any,
  RouterActive
>('router', {
  state: () => {
    return {
      routes: []
    }
  },

  actions: {
    addRoute(router: Router, routes: RouterType[]) {
      toMenuTree(routes).forEach(route => {
        this.routes.push(route)

        router.addRoute('Layout', route)
      })
    }
  }
})
