<template>
 <div class="container">
      <head-top signin-up="home">
        <span slot="logo" class="head_logo">
          ele.me
        </span>
    </head-top>
    <nav class="city_nav">
      <div class="city_tip">
          <span>当前定位城市：</span>
          <span>定位不准时，请在城市列表中选择</span>
      </div>
    </nav>
 </div>
</template>

<script>
import headTop from '../../components/header/head'

export default {
  data () {
    return {

    }
  },
  components: {
    headTop
  }
}
</script>

<style lang="scss" scoped>
    .container {
      display: flex;
      flex-direction: column;

      .head_logo{
        left: 0.4rem;
        font-weight: 400;
        font-size: 0.7rem;
        color: #fff;
        width: 2.3rem;
        height: 0.7rem;
      }
    }

      .city_nav {
        padding-top: 2.35rem;
        .city_tip {
          span:nth-of-type(1) {
            font-size: 0.55rem;
            color: #666;
          }
          span:nth-of-type(2) {
            font-size: 0.475rem;
            color: #9f9f9f;
            font-weight: 900;
          }
        }
      }

</style>
