import { App } from 'vue'
import { createPinia } from 'pinia'
export { userRouterStore } from './modules/router'
export { userStore } from './modules/user'

// import { createPersistedState } from 'pinia-persistedstate-plugin'

export const setupStore = (app: App) => {
  const store = createPinia()

  // store.use(createPersistedState())

  app.use(store)
}
