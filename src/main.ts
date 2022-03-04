import { createApp } from 'vue'
import App from './App.vue'
import { router } from './router'
import { setupPermission } from './router/permission'
const app = createApp(App)

app.use(router)

setupPermission(router)

router.isReady().then(() => app.mount('#app'))
