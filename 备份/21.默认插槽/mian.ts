// 引入creatApp用于创建应用
import { createApp } from 'vue'
// 引入app根组件
import App from './App.vue'
// 引入pinia
import { createPinia } from 'pinia'

// import emitter from './utils/emitter'

// 创建一个应用
const app = createApp(App)
// 创建pinia
const pinia = createPinia()
// 安装pinia
app.use(pinia)
// 挂载整个应用到app容器中
app.mount('#app')