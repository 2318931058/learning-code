import { createApp } from 'vue'
// 1. 引入pinia
import { createPinia } from 'pinia'

import App from './App.vue'

const app = createApp(App)

// 2. 创建pinia
const pinia = createPinia()

app.use(pinia)

app.mount('#app')
