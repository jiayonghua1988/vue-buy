<template>
  <div class="root-wrapper">
    <section>
      <section class="logo-wrapper">
        <img :src="logo" alt="" class="logo">
      </section>

      <section class="address">
        <span class="iconfont address-icon">&#xe743;</span>
        <span class="address-label">地址：上海市嘉定区师范大学天华学院同华楼111室</span>
      </section>
      <section class="emial">
        <span class="iconfont address-icon">&#xe743;</span>
        <span class="address-label">邮箱：service@astarschool.com</span>
      </section>
    </section>

    <section class="info">
      培典书院 版权所有<br/>Copyright©2019-2020 AstarSchool.com All rights reserved.
    </section>
  </div>
</template>

<script>
import LogoIcon from '../../images/icon-about-logo.png'
export default {
  data () {
    return {
      logo: LogoIcon
    }
  }
}
</script>

<style>
.root-wrapper {
  height: 100vh;
  background-color: #F4F4F4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.logo-wrapper {
  background-color: white;
  height: 450px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.logo {
  width: 331px;
}
.address {
  margin-top: 20px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 25px 15px;
}
.emial {
  margin-top: 2px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 25px 15px;
}
.address-icon {
  font-size: 30px;
  padding-right: 10px;
}
.address-label {
  color: #1B1B1F;
  font-size: 28px;
}
.info {
  color: #959595;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
  line-height: 40px;
}
</style>
