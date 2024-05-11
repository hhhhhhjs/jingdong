import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import App from '@/layout/Home.vue'
import router from './router'

const app = createApp(App)

const pinia = createPinia()

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.use(pinia)

app.mount('#app')
