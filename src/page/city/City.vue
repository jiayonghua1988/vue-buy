<template>
<div class="container">

  <!-- <ul class="az_wrap">
    <li v-for="(item,index) of azList" :key="index" class="az_wrap_item">{{item}}</li>
  </ul> -->
  <section class="search_bar">
    <section>
      <span class="iconfont search_icon">&#xe7a8;</span>
    <span class="search_input"><input type="text" placeholder="输入城市名" maxlength="10"></span>
    </section>
    <span class="search_btn">搜索</span>
  </section>

  <section class="localtion_wrap">
    <span class="iconfont icon_location">&#xe828;</span>
    <span class="current_city" @click="gotoNext(currentCity)">{{currentCity}}</span>
    <span class="localtion_hint">GPS定位</span>
  </section>

  <section class="hot-wrap">
    <p class="hot_title">请选择您所在的城市</p>
    <ul class="hot_city_wrap">
      <li v-for="(item,index) of hotCity" :key="index" class="hot_city_wrap_item" @click="gotoNext(item.city)">{{item.city}}</li>
    </ul>
  </section>

<van-index-bar :index-list="azListArray" highlight-color="#585858" :sticky="sticky">
  <section v-for="(city,index) in citys" :key="index">
    <van-index-anchor  :index="city.pinyin" />
    <p v-for="(name,nameIndex) in city.citysArray" :key="nameIndex" class="city_item_wrap" @click="gotoNext(name.city)">{{name.city}}</p>
  </section>
</van-index-bar>

<van-cell title="HHH"></van-cell>

</div>
</template>
<script>
import cityData from '../../assets/citys.json'
export default {
  data () {
    return {
      hotCity: [],
      citys: [],
      azList: ['城市定位', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'W', 'X', 'Y', 'Z'],
      azListArray: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'W', 'X', 'Y', 'Z'],
      sticky: false,
      currentCity: ''
    }
  },
  created () {
    this.hotCity = cityData.filter(item => item.popular_city === 1)
    for (const letter of this.azListArray) {
      this.citys.push({
        pinyin: letter,
        citysArray: cityData.filter(item => {
          const pp = item.pinyin.substring(0, 1).toLocaleUpperCase()
          return pp === letter
        })
      })
    }
    console.log('citys=' + this.citys)
    this.getCurrentCity()
  },
  methods: {
    getCitysByIndex (indexKey) {
      console.log('getCitysByIndex-----indexKey=' + indexKey)
      const newArray = []
      for (const city in this.cityData) {
        const pp = city.pinyin.substring(0, 1).toLocaleUpperCase()
        console.log('indexKey=' + indexKey + ';  pp=' + pp)
        if (indexKey === pp) {
          newArray.push(city)
        }
      }
      return newArray
    },
    // 获取 当前城市
    getCurrentCity () {
      this.$axios({
        url: 'https://restapi.amap.com/v3/ip?key=5c67b80bd27297a360b9db433f3ea74f',
        method: 'get',
        params: {}
      }).then(res => {
        if (res.data.status === '1') {
          this.currentCity = res.data.city
        } else {
          this.currentCity = '定位失败'
        }
      })
    },
    gotoNext (cityName) {
      this.$router.push({
        path: '/sub',
        query: {
          city: cityName
        }
      })
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
    margin-top: 20px;
  }
  .hot_city_wrap_item {
    height: 80px;
    width: 30%;
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
    padding: 30px;
  }
  .city_item_wrap_title {
    font-size: 28px;
    color: #585858;
    padding-top: 30px;
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
