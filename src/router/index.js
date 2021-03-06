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
  },
  {
    path: '/main',
    component: () => import('../page/main/main.vue'),
    meta: {
      title: '首页'
    },
    children: [
      {
        path: '/main',
        component: () => import('../page/home/home.vue')
      },
      {
        path: '/main/my',
        component: () => import('../page/my/my.vue')
      }
    ]
  },
  {
    path: '/demo/tabbar',
    component: () => import('../page/demo/tabBar.vue'),
    meta: {
      title: 'Tabbar 示例'
    },
    children: [
      {
        path: '/demo/tabbar/demo1',
        component: () => import('../page/demo/tabbarDemo1.vue'),
        meta: {
          title: '标签1'
        }
      },
      {
        path: '/demo/tabbar/demo2',
        component: () => import('../page/demo/tabbarDemo2.vue'),
        meta: {
          title: '标签2'
        }
      },
      {
        path: '/demo/tabbar/demo3',
        component: () => import('../page/demo/tabbarDemo3.vue'),
        meta: {
          title: '标签3'
        }
      },
      {
        path: '/demo/tabbar/demo4',
        component: () => import('../page/demo/tabbarDemo4.vue'),
        meta: {
          title: '标签4'
        }
      }
    ]
  },
  {
    path: '/settings',
    component: () => import('../page/settings/settings.vue'),
    meta: {
      title: '设置'
    }
  },
  {
    path: '/about',
    component: () => import('../page/about/about.vue'),
    meta: {
      title: '关于培典书院'
    }
  },
  {
    path: '/encourage',
    component: () => import('../page/input/encourage.vue'),
    meta: {
      title: '晓方块鼓励语'
    }
  },
  {
    path: '/feedback/input',
    component: () => import('../page/feedback/input.vue'),
    meta: {
      title: '意见反馈'
    }
  },
  {
    path: '/feedback/list',
    component: () => import('../page/feedback/list.vue'),
    meta: {
      title: '意见反馈'
    }
  },
  {
    path: '/feedback/detail',
    component: () => import('../page/feedback/detail.vue'),
    meta: {
      title: '意见反馈'
    }
  },
  {
    path: '/modify/phone',
    component: () => import('../page/modifyPhone/modifyPhone.vue'),
    meta: {
      title: '更换手机号'
    }
  },
  {
    path: '/user/info',
    component: () => import('../page/baseInfo/UserInfo.vue'),
    meta: {
      title: '用户信息'
    }
  },
  {
    path: '/modify/nickname',
    component: () => import('../page/baseInfo/ModifyNickname.vue'),
    meta: {
      title: '修改昵称'
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
