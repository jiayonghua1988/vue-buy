<template>
  <div class="root-wrapper">
    <section class="container-wrapper">
      <item-cell label="学生姓名" value="Oppr17" line>
        <i class="iconfont iconSize">&#xe73e;</i>
      </item-cell>
      <item-cell label="性别" :value="sex" line @cellClick="choiceSex">
        <i class="iconfont iconSize">&#xe740;</i>
      </item-cell>
      <item-cell label="年级/班级" value="小学一年级" line>
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
      sexColumns: ['男', '女']
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
    }
  }
}
</script>

<style>
.root-wrapper {
  height: 100vh;
  background-color: #F4F4F4;
  padding-top: 10px;
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
