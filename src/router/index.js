// 导入vue
import Vue from 'vue'
// 导入vue-router
import VueRouter from 'vue-router'
// 导入页面
import Home from '../page/home/home.vue'
// 选择城市
import City from '../page/city/city.vue'

// 导入组件 必须use
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/city',
    name: 'City',
    component: City
  }
]

const router = new VueRouter({
  routes
})

export default router
