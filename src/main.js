import { createApp } from 'vue'
import App from './App.vue'

// 路由
import router from './router'

// vuex
import store from './store'

// 全局引入element3
// import Element3 from 'element3'
// import 'element3/lib/theme-chalk/index.css'

// 全局样式
import 'styles/index.scss'

// element3
import element3 from './plugins/element3'

createApp(App)
.use(router)
.use(store)
.use(element3)
.mount('#app')
