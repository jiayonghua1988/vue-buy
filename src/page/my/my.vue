<template>
<div class="my-wrapper">
  <section class="user-info-wrapper">
    <section class="flex-row-center">
      <img :src="imageKey" alt="" class="head-img">
      <section class="flex-column">
        <span class="nickname">{{nickname}}</span>
        <span class="grade">{{showGrade(grade)}}</span>
      </section>
    </section>
    <i class="iconfont right-arrow">&#xe87b;</i>
  </section>

<section>
  <item-cell label="基本资料" :icon="icon1" class="margin-top10"></item-cell>
 <item-cell label="晓方块鼓励语" :icon="icon2" value="写一句话鼓励孩子哦~" class="margin-top10" line></item-cell>
<item-cell label="操作指南" :icon="icon3"></item-cell>
<item-cell label="用户服务协议" :icon="icon4" class="margin-top10" line></item-cell>
<item-cell label="关于培典书院" :icon="icon5"></item-cell>
<item-cell label="设置" :icon="icon6" class="margin-top10"></item-cell>
</section>

</div>
</template>

<script>
import ItemCell from '../../components/item-cell'
import Icon1 from '../../images/icon_my_1.png'
import Icon2 from '../../images/icon_my_2.png'
import Icon3 from '../../images/icon_my_3.png'
import Icon4 from '../../images/icon_my_4.png'
import Icon5 from '../../images/icon_my_5.png'
import Icon6 from '../../images/icon_my_6.png'
import { userParents } from '../../assets/requestUrl'
import { gradeStr, imageUrl } from '../../assets/utils'
export default {
  data () {
    return {
      message: '我的',
      icon1: Icon1,
      icon2: Icon2,
      icon3: Icon3,
      icon4: Icon4,
      icon5: Icon5,
      icon6: Icon6,
      nickname: '',
      grade: 0,
      imageKey: ''
    }
  },
  components: {
    ItemCell
  },
  methods: {
    getInfo () {
      userParents(sessionStorage.getItem('userId'), (res) => {
        this.nickname = res.data.data.nickName
        this.grade = res.data.data.grade
        this.imageKey = this.getNetImageUrl(res.data.data.imageKey)
      }, (res) => {

      })
    },
    showGrade (g) {
      return gradeStr(g)
    },
    getNetImageUrl (imageKey) {
      return imageUrl(imageKey)
    }
  },
  mounted () {
    this.getInfo()
  }
}
</script>

<style scope>
.my-wrapper {
  background-color: #f4f4f4;
  height: 100vh;
  box-sizing: border-box;
}
.user-info-wrapper {
  height: 324px;
  background: url('../../images/my_bg.png');
  background-repeat: no-repeat;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.head-img {
  width: 151px;
  height: 151px;
  border-radius: 50%;
  border: solid #F4F4F4 4px;
  margin-left: 30px;
}
.nickname {
  color: #333333;
  font-size: 32px;
  margin-left: 30px;
}
.grade {
  font-size: 32px;
  color: #636363;
  margin-left: 30px;
  margin-top: 20px;
}
.right-arrow {
  font-size: 30px;
  padding-right: 20px;
}
.margin-top10 {
  margin-top: 10px;
}
</style>
