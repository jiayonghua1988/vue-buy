<template>
  <div>
    <section class="grade_wrapper">
    </section>
    <van-swipe class="my-swipe" indicator-color="#F1F0F0">
      <van-swipe-item class="swipe-item" v-for="(parentItem,pIndex) in subjects" :key="pIndex">
        <section class="swipe-item-bg" v-for="(item,index) in parentItem" :key="index">
          <section class="swipe-item-content">
              <img :src="getSubjectIconUrl(item.subjectIcon)" v-if="item.subjectIcon.includes('customizeIcon')"/>
              <span v-else class="iconfont subject-item">{{getSubjectIconUrl(item.subjectIcon)}}</span>
          <p>
            <span>{{item.subjectName}}</span>
            <span class="problemCount">{{item.problemCount}}</span>
          </p>
          </section>

        </section>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      msg: 'aaa',
      subjects: [
        [
          {
            problemCount: 0,
            subjectIcon: 'https://peidian-dev.oss-cn-shanghai.aliyuncs.com/customizeIcon/PROBLEM_SUBJECT/unFinished.png',
            subjectId: 0,
            subjectName: '未整理',
            subjectCode: 'WFL',
            parentId: 0
          },
          {
            problemCount: 0,
            subjectIcon: 'https://peidian-dev.oss-cn-shanghai.aliyuncs.com/customizeIcon/PROBLEM_SUBJECT/alreadyProcessed.png',
            subjectId: 99,
            subjectName: '已拆题',
            subjectCode: 'YC',
            parentId: 0
          },
          {
            problemCount: 0,
            subjectIcon: 'https://peidian-dev.oss-cn-shanghai.aliyuncs.com/customizeIcon/PROBLEM_SUBJECT/timeAlbum.png',
            subjectId: 51,
            subjectName: '时光相册',
            subjectCode: '',
            parentId: 0
          },
          {
            problemCount: 0,
            subjectIcon: 'https://peidian-dev.oss-cn-shanghai.aliyuncs.com/customizeIcon/PROBLEM_SUBJECT/teaching.png',
            subjectId: 50,
            subjectName: '讲义教辅',
            subjectCode: '',
            parentId: 0
          }
        ]
      ]
    }
  },
  computed: {
    ...mapState({
      userId () {
        return this.$store.state.userId === '' ? sessionStorage.getItem('userId')
          : this.$store.state.userId
      },
      token () {
        return this.$store.state.token === '' ? sessionStorage.getItem('token') : this.$store.state.token
      }
    })
  },
  methods: {
    getSubjectIconUrl (subjectIcon) {
      let iconUrl = ''
      if (subjectIcon.includes('customizeIcon')) {
        iconUrl = this.$imageUrl.concat(subjectIcon)
      } else {
        switch (subjectIcon) {
          case 'icon-en-': // 英语
            iconUrl = '&#xe618;'
            break
          case 'icon-physics-':// 物理
            iconUrl = '&#xe61c;'
            break
          case 'icon-chemistry-':// 化学
            iconUrl = '&#xe60e;'
            break
          case 'icon-history-':// 历史
            iconUrl = '&#xe61a;'
            break
          case 'icon-biology-':// 生物
            iconUrl = '&#xe616;'
            break
          case 'icon-geography-':// 地理
            iconUrl = '&#xe615;'
            break
          case 'icon-politics-':// 政治
            iconUrl = '&#xe60b;'
            break
          case 'icon-mathematical-':
            iconUrl = '&#xe619;'
            break
          default:
            iconUrl = '&#xe619;'
            break
        }
      }
      return iconUrl
    },
    getSubjectByParentId () {
      const that = this
      const userId = sessionStorage.getItem('userId')
      this.$axios({
        url: '/api/problem/subject/searchSubjectDTOByParentId?parentId=' + userId,
        method: 'GET',
        params: {
          bizType: 'PROBLEM',
          flag: 1
        },
        headers: {
          'x-client-token-user': this.token
        }
      }).then(res => {
        // console.log(JSON.stringify(res))
        if (res.data.code === 0) {
          that.subjects = []
          const arrays = res.data.jsonObj
          // console.log(JSON.stringify(arrays))
          let itemArray = []
          for (let i = 0; i < arrays.length; i++) {
            const item = arrays[i]
            const itemJson = {
              problemCount: item.problemCount,
              subjectIcon: item.subjectIcon,
              subjectId: item.subjectId,
              subjectName: item.subjectName,
              subjectCode: item.subjectCode,
              parentId: item.parentId
            }
            if (i % 9 === 0) {
              itemArray = []
              that.subjects.push(itemArray)
            }
            itemArray.push(itemJson)
          }

          console.log('封装后的数据=' + JSON.stringify(that.subjects))
        }
      })
    }
  },
  mounted: function () {
    this.getSubjectByParentId()
  }
}
</script>

<style>
  .my-swipe .van-swipe-item {
    color: #1B1B1F;
    font-size: 28px;
    text-align: center;
    background-color: #fff;

  }
  .grade_wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .swipe-item {
    background: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
  }
  .swipe-item-bg {
    display: flex;
    flex-direction: row;
    width: 30%;
    box-shadow: 0px 2px 8px 0px rgba(231, 230, 230, 0.5);
    border-radius: 10px;
    margin: 15px 0px 0px 15px;
    box-sizing: border-box;
    height: 182px;
    align-content: center;
    justify-content: center;
    align-items: center;
  }
  .swipe-item-content {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    align-self: center;
  }
  .swipe-item-content > img {
    width: 64px;
    height: 53px;
    margin-bottom: 30px;
    align-self: center;
  }
  .problemCount {
    color: #D51E1E;
  }
  .subject-item {
    width: 53px;
  }
</style>
