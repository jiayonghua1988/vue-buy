<template>
  <div>
    <router-view class="content"/>
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
