### Vant TabBar使用
> 底部tabbar 的使用研究了很久才实现  出现的问题 每次点击之后跳转到了一个新的界面 底部的tabbar不见了，不知道什么原因，后面才发现是vue-route 注册的时候  子页面要写在children:[] 中

### 用法
```
<template>
  <div>
    <router-view class="content"/>
    <div style="height:5rem;"></div> // 解决tabbar挡住页面内容问题
    <van-tabbar :route="true"  v-model="active" class="tabbar-height">
        <van-tabbar-item replace to='/demo/tabbar/demo1' icon="home-o">标签1</van-tabbar-item>
        <van-tabbar-item replace to='/demo/tabbar/demo2' icon="search">标签2</van-tabbar-item>
        <van-tabbar-item replace to='/demo/tabbar/demo3' icon="friends-o">标签3</van-tabbar-item>
        <van-tabbar-item  replace to='/demo/tabbar/demo4' icon="setting-o">标签4</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: 'TabBar Hello',
      active: 0
    }
  }
}
</script>

<style>

.flex-column-between {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: 100%;
}
.tabbar-height {
  height: 100px;
}
.content {
  height: 100vh;
}
</style>

```

### 注册路由
```
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
  }
```
### 想默认显示第一个tabbar的内容
>  把children:[] 路由中的path 设置成和付 route 的path一样就可以了  /demo/tabbar

### Tabbar 挡住了页面内容
>   在router-view  下面增加  <div style="height: 5rem;"></div>
