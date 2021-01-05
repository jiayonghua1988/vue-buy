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
import { Toast, IndexBar, IndexAnchor, Cell, Picker, Popup } from 'vant'
import 'vant/lib/index.css'

import './style/resetcss.css'
// 导入iconfont
import './assets/iconfont/iconfont.css'
// 引入 vue-amap
import Map from 'vue-amap'

Vue.use(Toast)
Vue.use(IndexBar)
Vue.use(IndexAnchor)
Vue.use(Cell)
Vue.use(Map)
Vue.use(Picker)
Vue.use(Popup)

// 初始化vue-amap
Map.initAMapApiLoader({
  // 高德的key
  key: '5c67b80bd27297a360b9db433f3ea74f',
  // 插件集合
  plugin: ['AMap.Geolocation', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType'],
  // 高德 sdk 版本，默认为 1.4.4
  uiVersion: '1.0.11'
})

//  全局变量
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/web/'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
