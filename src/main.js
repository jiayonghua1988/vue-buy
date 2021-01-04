import Vue from 'vue'
import App from './App.vue'
// 在route目录下 初始化 vue-route  导入 route 目录
import router from './router'
// 在route目录下 初始化 vuex 组件  并导入
import store from './store'
// 页面适配
// px 转rem
import 'lib-flexible/flexible'

// 导入  axios 网络请求框架
import axios from 'axios'

//  导入 vant Toast
import { Toast, IndexBar, IndexAnchor, Cell } from 'vant'
import 'vant/lib/index.css'

import './style/resetcss.css'
// 导入iconfont
import './assets/iconfont/iconfont.css'
Vue.use(Toast)
Vue.use(IndexBar)
Vue.use(IndexAnchor)
Vue.use(Cell)

//  全局变量
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/web/'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
