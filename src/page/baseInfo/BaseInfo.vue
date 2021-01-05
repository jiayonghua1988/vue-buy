<template>
<div>
  <div class="container2">
    <div class="base_info">
      <div class="item_wrap" @click="showSexDialog">
        <section>
          <i class="iconfont">&#xe740;</i>
          <span class="left_label">性别</span>
        </section>
        <section>
          <span class="right_label">{{sex}}</span>
          <i class="iconfont">&#xe87b;</i>
        </section>
      </div>
      <div class="item_wrap border_none" @click="showGradeDialog">
        <section>
          <i class="iconfont">&#xe746;</i>
          <span class="left_label">年级/班级</span>
        </section>
        <section>
          <span class="right_label">{{grade}}</span>
          <i class="iconfont">&#xe87b;</i>
        </section>
      </div>
    </div>
    <section class="btn_submit">完成</section>
  </div>
  <van-popup v-model="showPickerSex" round position="bottom">
            <van-picker
            show-toolbar
            :columns="sexColumns"
            @cancel="showPickerSex = false"
            @confirm="sexConfirm"
            />
        </van-popup>

          <van-popup v-model="showPickerGrade" round position="bottom">
            <van-picker
            show-toolbar
            :columns="gradeColumns"
            @cancel="showPickerGrade = false"
            @confirm="gradeConfirm"
            />
        </van-popup>

  </div>
</template>
<script>
export default {
  data () {
    return {
      sex: '男',
      grade: '小学一年级',
      showPickerSex: false,
      showPickerGrade: false,
      sexColumns: ['男', '女'],
      gradeColumns: [
        {
          values: ['小学一年级', '小学二年级', '小学三年级', '小学四年级'],
          defaultIndex: 3
        },
        {
          values: ['111', '22', '333', '444'],
          defaultIndex: 2
        },
        {
          values: ['A', 'B', 'C', 'D'],
          defaultIndex: 1
        }
      ]
    }
  },
  methods: {
    showSexDialog () {
      this.showPickerSex = true
    },
    showGradeDialog () {
      this.showPickerGrade = true
    },
    sexConfirm (value) {
      this.showPickerSex = false
      this.sex = value
    },
    gradeConfirm (value) {
      this.showPickerGrade = false
      console.log('gradeConfirm....' + value)
    }
  }
}
</script>

<style>
  .container2 {
    height: 100vh;
    background: #F4F3F6;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
  .base_info {
    border-radius: 20px;
    box-shadow: 0px 2px 13px 0px rgba(0, 0, 0, 0.05);
    margin: 20px;
    display: flex;
    flex-direction: column;
    width: 710px;
    background: #fff;
  }
  .btn_submit {
    width: 90%;
    margin: 50px 20px;
    background: #69DC6B;
    color: #fff;
    font-size: 36px;
    height: 90px;
    border-radius: 100px;
    text-align: center;
    line-height: 90px;
  }
  .item_wrap {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid #EBEBEB;
    padding: 30px 20px;
  }
  .left_label {
    font-size: 28px;
    color: #1B1B1F;
    margin: 0px 10px;
  }
  .right_label {
    color: #8B8B8B;
    font-size: 28px;
  }
  .iconfont_color {
    color: #1B1B1F;
  }
  .border_none {
    border: none;
  }
</style>
