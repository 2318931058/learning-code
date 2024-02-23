import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
// 1. 引入router
import router from './router'

const app = createApp(App)

app.use(createPinia())
// 2. 使用router
app.use(router)

app.mount('#app')
