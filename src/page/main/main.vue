<template>
<div>
  <router-view/>

  <van-tabbar v-model="active" route z-index='active' active-color="#69DC6B" inactive-color="#B0B0B0">
  <van-tabbar-item icon="home-o" to="/main" replace>首页</van-tabbar-item>
  <van-tabbar-item icon="friends-o" to='/main/my' replace>我的</van-tabbar-item>
</van-tabbar>
</div>
</template>

<script>
export default {
  data () {
    return {
      active: 0
    }
  }
}
</script>

<style>

</style>
