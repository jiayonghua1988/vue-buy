<template>
  <div>
    <section class="item-bg">
      <span class="title">问题描述</span>
      <span class="desc">{{jsonObj.complainDescribe}}</span>
    </section>

    <section class="item-bg">
      <span class="title">图片展示</span>
      <ul>
        <li v-for="(index,item) in images" :key="index"><img :src="getImageUrl(item)" alt=""></li>
      </ul>
    </section>
  </div>
</template>

<script>

import { formatDate, imageUrl } from '../../assets/utils'
import { getComplain } from '../../assets/requestUrl'

export default {
  data () {
    return {
      jsonObj: {},
      images: []
    }
  },
  methods: {
    formatTime (value) {
      return formatDate(value)
    },
    getData (id) {
      getComplain(id, (res) => {
        this.jsonObj = res.data.jsonObj
        this.images = res.data.jsonObj.bizData.split(',')
        console.log('images=' + this.images)
      }, (res) => {

      })
    },
    getImageUrl (url) {
      return imageUrl(url)
    }
  },
  mounted () {
    this.getData(this.$route.query.id)
  }
}
</script>

<style>
  .root-wrapper {
    height: 100vh;
    background-color: #F4F4F4;
  }
  .title {
    color: #252625;
    font-size: 32px;
    border-left: solid 5px #69DC6B;
    padding-left: 15px;
  }
  .item-bg {
    margin: 20px;
    background-color: #fff;
    border-radius: 10px;
  }
  .desc {
    color: #262626;
    font-size: 28px;
    line-height: 1.2em;
  }
</style>
