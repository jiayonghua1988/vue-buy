<template>
  <div>
    <button @click="hello()">fsfd</button>
    <section class="grade_wrapper">
      <section>
        <img :src="avatarUrl(userInfo.imageKey)" alt="" class="user-image-key">
        <span class="grade-name"></span>
      </section>
      <span class="iconfont icon-settings">&#xe766;</span>
    </section>
    <van-swipe class="my-swipe" indicator-color="#000000" :loop="false">
      <van-swipe-item class="swipe-item" v-for="(parentItem,pIndex) in subjects" :key="pIndex">
        <section class="swipe-item-bg" v-for="(item,index) in parentItem" :key="index">
          <section class="swipe-item-content">
              <img :src="getSubjectIconUrl(item.subjectIcon)" v-if="item.subjectIcon.includes('customizeIcon')"/>
              <!--  英语 -->
              <span v-else-if="item.subjectIcon === 'icon-en-'" class="iconfont subject-item" style="color:#DB80FB;">&#xe618;</span>
              <!-- 物理 -->
              <span v-else-if="item.subjectIcon === 'icon-physics-'" class="iconfont subject-item" style="color:#FF7C75;">&#xe61c;</span>
              <!-- 化学 -->
              <span v-else-if="item.subjectIcon === 'icon-chemistry-'" class="iconfont subject-item" style="color:#2DC1F9;"> &#xe60e; </span>
              <!--  历史-->
             <span v-else-if="item.subjectIcon === 'icon-history-'" class="iconfont subject-item" style="color:#E7B66E;"> &#xe61a; </span>
             <!-- 生物 -->
             <span v-else-if="item.subjectIcon === 'icon-biology-'" class="iconfont subject-item" style="color:#FD991D;"> &#xe616; </span>
             <!-- 地理 -->
             <span v-else-if="item.subjectIcon === 'icon-geography-'" class="iconfont subject-item" style="color:#DB80FB;"> &#xe615; </span>
             <!-- 政治 -->
             <span v-else-if="item.subjectIcon === 'icon-politics-'" class="iconfont subject-item" style="color:#5BD380;"> &#xe60b; </span>
             <!-- 奥数 -->
             <span v-else-if="item.subjectIcon === 'icon-mathematical-'" class="iconfont subject-item" style="color:#FD991D;"> &#xe619; </span>
             <span v-else-if="item.subjectIcon === 'icon-custom-'" class="iconfont subject-item" style="color:#ED89F3;"> &#xe64c; </span>
             <span v-else-if="item.subjectIcon === 'icon-custom-1'" class="iconfont subject-item" style="color:#FA987F;"> &#xe64d; </span>
             <span v-else-if="item.subjectIcon === 'icon-custom-2'" class="iconfont subject-item" style="color:#1AC8FB;"> &#xe64e; </span>
             <span v-else-if="item.subjectIcon === 'icon-custom-3'" class="iconfont subject-item" style="color:#FAAB21;"> &#xe600; </span>
             <span v-else-if="item.subjectIcon === 'icon-custom-4'" class="iconfont subject-item" style="color:#FAA230;"> &#xe602; </span>
             <span v-else-if="item.subjectIcon === 'icon-custom-5'" class="iconfont subject-item" style="color:#82EAA4;"> &#xe652; </span>
             <span v-else-if="item.subjectIcon === 'icon-custom-6'" class="iconfont subject-item" style="color:#ED88F4;"> &#xe653; </span>
             <span v-else-if="item.subjectIcon === 'icon-custom-7'" class="iconfont subject-item" style="color:#F77F81;"> &#xe657; </span>
             <span v-else-if="item.subjectIcon === 'icon-zhifeiji'" class="iconfont subject-item" style="color:#FD991D;"> &#xe605; </span>
             <span v-else-if="item.subjectIcon === 'icon-bianzu1'" class="iconfont subject-item" style="color:#FD991D;"> &#xe604; </span>
             <!-- 其他 -->
             <span v-else ></span>
          <p>
            <span>{{item.subjectName}}/</span>
            <span :class="{'problemCount-red':item.subjectName == '未整理','problemCount-normal': item.subjectName != '未整理'}">{{item.problemCount}}</span>
          </p>
          </section>

        </section>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { hello, aa } from '../../assets/utils'
export default {
  data () {
    return {
      msg: 'aaa',
      userInfo: {},
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
    test () {
      hello()
      console.log('aa=' + aa)
    },
    getSubjectIconUrl (subjectIcon) {
      let iconUrl = ''
      if (subjectIcon.includes('customizeIcon')) {
        iconUrl = this.$imageUrl + subjectIcon
      }
      return iconUrl
    },
    getSubjectByParentId () {
      const that = this
      this.subjects = []
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
    },
    avatarUrl (iconUrl) {
      return this.$imageUrl + iconUrl
    },
    getUserParent () {
      this.$axios({
        url: '/api/user/parents/' + sessionStorage.getItem('userId'),
        method: 'GET',
        params: {},
        headers: {
          'x-client-token-user': this.token
        }
      }).then(res => {
        console.log('获取家长信息:' + JSON.stringify(res))
        if (res.data.code === 0) {
          this.userInfo = res.data.data
          // this.userInfo.imageKey = this.$imageUrl + this.userInfo.imageKey
        }
      })
    }
  },
  mounted: function () {
    this.getSubjectByParentId()
    this.getUserParent()
    console.log('aa= ' + aa)
    hello()
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
    margin-bottom: 30px;
    align-self: center;
  }
    .swipe-item-content > span {
    margin-bottom: 30px;
    align-self: center;
    font-size: 60px;
  }
  .problemCount-red {
    color: #D51E1E;
  }
  .problemCount-normal {
    color: #1B1B1F;
  }
  .subject-item {
    width: 50px;
  }
  .icon-settings {
    font-size: 48px;
    color: #69DC6B;
  }
  .user-image-key {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .grade-name {
    color: #1B1B1F;
    font-size: 32px;
  }
</style>
