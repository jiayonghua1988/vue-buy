<template>
<div class="container">
  <ul class="az_wrap">
    <li v-for="(item,index) of azList" :key="index" class="az_wrap_item">{{item}}</li>
  </ul>
  <section class="search_bar">
    <section>
      <span class="iconfont search_icon">&#xe7a8;</span>
    <span class="search_input"><input type="text" placeholder="输入城市名" maxlength="10"></span>
    </section>
    <span class="search_btn">搜索</span>
  </section>

  <section class="localtion_wrap">
    <span class="iconfont icon_location">&#xe828;</span>
    <span class="current_city">上海</span>
    <span class="localtion_hint">GPS定位</span>
  </section>

  <section class="hot-wrap">
    <p class="hot_title">请选择您所在的城市</p>
    <ul class="hot_city_wrap">
      <li v-for="(item,index) of hotCity" :key="index" class="hot_city_wrap_item">{{item}}</li>
    </ul>
  </section>
  <ul class="city_wrap">
    <li v-for="(city,index) of citys" :key="index" class="city_item_wrap">{{city}}</li>
  </ul>
</div>
</template>
<script>
export default {
  data () {
    return {
      hotCity: ['上海', '北京', '广州', '深圳', '天津', '郑州', '武汉', '张家口', '南阳'],
      citys: ['鞍山', '安庆', '安阳', '安康', '安顺', '北京', '保定', '包头', '宝鸡', '包头'],
      azList: ['城市定位', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'W', 'X', 'Y', 'Z']
    }
  }
}
</script>

<style>
  .search_bar {
    background: #F6F6F6;
    border-radius: 10px;
    font-size: 28px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px 15px;
    height: 80px;
    line-height: 80px;
  }
  .search_icon {
    width: 28px;
    height: 33px;
    margin-left: 10px;
  }
  .search_input {
    color:#B0B0B0;
    margin-left: 10px;
  }
  .search_btn {
    color: #464646;
    margin-right: 10px;
  }

  .localtion_wrap {
    border-top: 1px solid #EBECEF;
    padding: 30px 15px;
  }
  .icon_location {
    width: 23px;
    height: 30px;
  }
  .current_city {
    color: #333333;
    font-size: 38px;
    font-weight: 900;
    margin: 0px 5px;
  }
  .localtion_hint {
    color: #999999;
    font-size: 28px;
    margin-left: 10px;
  }
  .hot-wrap {
    padding: 30px;
    background: #F8F8F8;
  }
  .hot_title {
    font-size: 28px;
    color: #666666;
  }
  .hot_city_wrap {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 630px;
    margin-top: 20px;
  }
  .hot_city_wrap_item {
    height: 80px;
    width: 195px;
    border: 2px solid #C8C8C8;
    border-radius: 10px;
    font-size: 28px;
    color: #333333;
    text-align: center;
    line-height: 80px;
    margin-top: 10px;
    margin-right: 10px;
    background: #fff;
  }
  .city_wrap {
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 30px 15px;
  }
  .city_item_wrap {
    font-size: 28px;
    color: #585858;
    border-bottom: 1px solid #EDEDED;
    padding: 30px 0px;
  }
  .az_wrap {
    display: flex;
    flex-direction: column;
    font-size: 24px;
    color: #585858;
    position: fixed;
    top: 250px;
    right: 0px;
  }
  .az_wrap_item {
    width: 60px;
    text-align: center;
    line-height: 30px;
  }
</style>
