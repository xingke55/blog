import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'normalize.css'
import './assets/css/index.scss'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '../mock'
const app = createApp(App)
app.use(ElementPlus)
app.use(router)
app.mount('#app')
