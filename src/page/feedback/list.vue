<template>
  <div class="root-wrapper">
    <ul v-if="list.length > 0">
      <li class="content-wrapper" v-for="(item,index) in list" :key="index" @click="onItemClick(item.id)">
        <span class="desc">{{item.complainDescribe}}</span>
        <section class="flex-right">
          <i class="iconfont time-icon">&#xe681;</i>
          <span class="time">{{formatTime(item.createTime)}}</span>
        </section>

      </li>
    </ul>
    <section v-else class="empty-wrapper">
      <img :src="emptyIcon" alt="" class="emptyIcon">
      <span class="empty-label">暂无意见反馈～</span>
    </section>
  </div>
</template>

<script>

import { searchComplain } from '../../assets/requestUrl'
import { formatDate } from '../../assets/utils'
import feedbackEmptyImage from '../../images/icon-feedback-empty.png'
export default {
  data () {
    return {
      list: [
        {
          desc: '描述问题文案文案文案文案描述问题文案文案文案文案描述问题文案文案文案文案'
        }
      ],
      emptyIcon: feedbackEmptyImage
    }
  },
  methods: {
    getList () {
      searchComplain(res => {
        this.list = res.data.jsonObj.dataList
        console.log(res.data.jsonObj.dataList)
      }, res => {

      })
    },
    formatTime (value) {
      return formatDate(value)
    },
    onItemClick (id) {
      console.log('id=' + id)
      this.$router.push({
        path: '/feedback/detail',
        query: { id: id }
      })
    }
  },
  mounted () {
    console.log('mounted===============')
    this.getList()
  }
}
</script>

<style>
.content-wrapper {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  margin: 20px;
}
.time-icon {
  font-size: 50px;
  color: #999999;
}
.desc {
  color: #262626;
  font-size: 28px;
  line-height: 1.3em;
}
.root-wrapper {
  height: 100vh;
  background-color:#F4F4F4;

}
.flex-right {
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: flex-end;
}
.time {
  color: #999999;
  font-size: 28px;
}
.emptyIcon {
  width: 353px;
}
.empty-label {
  color: #999999;
  font-size: 32px;
  margin-top: 70px;
}
.empty-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 100%;
  height: 100vh;
  padding-top: 250px;
}
</style>
