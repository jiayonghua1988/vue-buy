<template>
  <div>
    <section class="grade_wrapper">

    </section>
    <van-swipe class="my-swipe" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      msg: 'aaa'
    }
  },
  computed: {
    ...mapState({
      userId () {
        return this.$store.state.userId
      }
    })
  }
}
</script>

<style>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 300px;
    text-align: center;
    background-color: #39a9ed;
  }
  .grade_wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
</style>
