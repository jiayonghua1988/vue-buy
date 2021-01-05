// 导入vue
import Vue from 'vue'
// 导入vue-router
import VueRouter from 'vue-router'

// 导入组件 必须use
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../page/login/Login.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/city',
    component: () => import('../page/city/City.vue'),
    meta: {
      title: '选择城市'
    }
  },
  {
    path: '/sub',
    name: 'sub',
    component: () => import('../page/subdistrict/ChoiceSubdistrict.vue'),
    meta: {
      title: '选择小区'
    }
  },
  {
    path: '/baseinfo',
    component: () => import('../page/baseInfo/BaseInfo.vue'),
    meta: {
      title: '基本信息'
    }
  }
]

const router = new VueRouter({
  routes
})

// 为页面设置标题
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
