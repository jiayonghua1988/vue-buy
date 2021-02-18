<template>
  <div class="root-wrapper">

    <section>
        <van-nav-bar title="意见反馈" left-text="返回" left-arrow @click-left="onClickLeft" @click-right="onClickRight" border>
        <template #right>
          <i class="right-icon iconfont">&#xe604;</i>
        </template>
      </van-nav-bar>

      <section class="flex-row-between">
        <span class="title">请描述你的问题</span>
        <span class="input-number">0/240</span>
      </section>
      <textarea placeholder="请输入..." class="input-content" v-model="content"></textarea>
      <section class="flex-row-between">
        <span class="title">提供问题相关图片</span>
        <span class="input-number">{{countNumber}}/6</span>
      </section>

      <section class="image-wrapper">
        <van-uploader v-model="fileList" multiple max-count="6" :after-read="afterRead"/>
      </section>
    </section>
    <section class="btn-save">
      提交
    </section>
  </div>
</template>

<script>
import { addComplain } from '../../assets/requestUrl'
export default {
  data () {
    return {
      fileList: [
      ],
      countNumber: 0,
      content: ''
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    },
    onClickRight () {
      this.$router.push('/feedback/list')
    },
    afterRead (file) {
      this.countNumber = this.fileList.length
      console.log(file)
      console.log(this.fileList)
    },
    createComplain () {
      addComplain({
        bizData: '',
        complainDescribe: '',
        parentId: '',
        complainType: ''
      }, () => {

      }, () => {

      })
    }
  }
}
</script>

<style>
.root-wrapper {
  display: flex;
  flex-direction: column;
  background-color: #F4F4F4;
  height: 100vh;
  justify-content: space-between;
  box-sizing: border-box;
}
.right-icon {
  font-size: 30px;
}
.title {
  color: #1D1D1D;
  font-size: 28px;
  padding: 20px;
}
.input-number {
  color: #666666;
  font-size: 28px;
  padding: 20px;
}
.input-content {
  color: #1D1D1D;
  font-size: 28px;
  padding: 20px;
  background-color: #fff;
  min-height: 320px;
  width: 100%;
  border: none;
  box-sizing: border-box;
}
.image-wrapper {
  background-color: #fff;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 30px;
}
.btn-save {
  background-color: #69DC6B;
  border-radius: 50px;
  margin: 40px;
  color: #fff;
  font-size: 36px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 0px;
}
.image-item {
  width: 127px;
  height: 121px;
  background-color: red;
  margin-left: 10px;
}
</style>
