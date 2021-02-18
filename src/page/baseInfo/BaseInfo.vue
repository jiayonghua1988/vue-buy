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
    <save-button label='完成' @btnClick='modifyUserInfo'></save-button>

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
import { mapState } from 'vuex'
import saveButton from '../../components/save-button.vue'
export default {
  data () {
    return {
      sex: '男',
      grade: '小学一年级',
      showPickerSex: false,
      showPickerGrade: false,
      sexColumns: ['男', '女'],
      gradeNum: [],
      gradeColumns: []
    }
  },
  computed: {
    ...mapState(
      ['userId']
    )
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
      const array = value.toString().split(',')
      this.grade = `${array[0]}(${array[1] === '无' ? '' : array[1]}${array[2]})`
    },
    num1000 () {
      this.gradeNum = []
      for (let i; i < 1001; i++) {
        this.gradeNum.push(i + '班')
      }
    },
    initGradeData () {
      const grade1 = ['小学一年级', '小学二年级', '小学三年级', '小学四年级', '小学五年级', '小学六年级', '初中一年级', '初中二年级', '初中三年级', '高中一年级', '高中二年级', '高中三年级']
      const gradeItem2 = ['无', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'G', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
      const gradeNum = []
      for (let i = 1; i < 1001; i++) {
        gradeNum.push(i + '班')
      }

      this.gradeColumns.push({
        values: grade1,
        defaultIndex: 3
      })
      this.gradeColumns.push({
        values: gradeItem2,
        defaultIndex: 2
      })
      this.gradeColumns.push({
        values: gradeNum,
        defaultIndex: 1
      })
    },
    modifyUserInfo () {
      // console.log('userId=' + this.$store.userId)
      // this.$axios({
      //   url: 'api/user/parents/update/$userId',
      //   methods: 'PUT'
      // })
      this.$router.push('/main')
    }
  },
  mounted () {
    this.initGradeData()
  },
  components: {
    saveButton
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
    padding: 20px 20px;
    box-sizing: border-box;
  }
  .base_info {
    border-radius: 20px;
    box-shadow: 0px 2px 13px 0px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    background: #fff;
    width:100%;
    box-sizing: border-box;
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
