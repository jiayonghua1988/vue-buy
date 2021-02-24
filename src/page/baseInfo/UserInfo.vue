<template>
  <div class="root-wrapper">
    <section class="container-wrapper">
      <item-cell label="学生姓名" value="Oppr17" line>
        <i class="iconfont iconSize">&#xe73e;</i>
      </item-cell>
      <item-cell label="性别" :value="sex" line @cellClick="choiceSex">
        <i class="iconfont iconSize">&#xe740;</i>
      </item-cell>
      <item-cell label="年级/班级" :value="grade" line @cellClick="choiceGrade">
        <i class="iconfont iconSize">&#xe746;</i>
      </item-cell>
      <item-cell label="城市" value="上海市" line>
          <i class="iconfont iconSize">&#xe742;</i>
      </item-cell>
      <item-cell label="学校" value="上海中学" line>
        <i class="iconfont iconSize">&#xe74a;</i>
      </item-cell>
      <item-cell label="小区" value="海富花园">
        <i class="iconfont iconSize">&#xe743;</i>
      </item-cell>
    </section>
    <save-button label="保存" @btnClick="saveInfo"></save-button>

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
import ItemCell from '../../components/item-cell.vue'
import SaveButton from '../../components/save-button.vue'
export default {
  data () {
    return {
      sex: '男',
      showPickerSex: false,
      sexColumns: ['男', '女'],
      grade: '小学一年级',
      gradeNum: [],
      gradeColumns: [],
      showPickerGrade: false
    }
  },
  components: {
    ItemCell,
    SaveButton
  },
  methods: {
    saveInfo () {

    },
    sexConfirm (value) {
      this.sex = value
      this.showPickerSex = false
    },
    choiceSex () {
      this.showPickerSex = true
    },
    gradeConfirm (value) {
      this.showPickerGrade = false
      console.log('gradeConfirm....' + value)
      const array = value.toString().split(',')
      this.grade = `${array[0]}(${array[1] === '无' ? '' : array[1]}${array[2]})`
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
    choiceGrade () {
      this.showPickerGrade = true
    }
  },
  mounted () {
    this.initGradeData()
  }
}
</script>

<style>
.root-wrapper {
  height: 100vh;
  background-color: #F4F4F4;
  padding-top: 10px;
  box-sizing: border-box;
}
.container-wrapper {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: #fff;
  margin: 20px;
  padding: 2px;
}
.iconSize {
  font-size: 40px;
  margin-left: 30px;
}
</style>
