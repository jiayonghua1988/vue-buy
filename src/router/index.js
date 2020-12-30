// 导入vue
import Vue from 'vue'
// 导入vue-router
import VueRouter from 'vue-router'
import Login from '../page/login/Login.vue'

// 导入组件 必须use
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
