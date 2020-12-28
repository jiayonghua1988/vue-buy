import Vue from 'vue'
import App from './App.vue'
// 在route目录下 初始化 vue-route  导入 route 目录
import router from './router'
// 在route目录下 初始化 vuex 组件  并导入
import store from './store'
// 页面适配
// px 转rem
import 'lib-flexible/flexible'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
