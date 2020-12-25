<template>
  <div class="city_container">
    <head-top :head-title="cityname">

    </head-top>
    <form>
        <input type="search" name="city" placeholder="输入学校、商务楼、地址" required v-model="inputVaule">
    </form>
  </div>
</template>
<script>
// 导入标题栏
import headTop from '../../components/header/head'
export default {
  data () {
    return {
      // 当前城市的名称
      cityname: '选择城市',
      // 当前城市的id
      cityid: '',
      // 搜索内容
      inputVaule: ''
    }
  },
  components: {
    headTop
  }
}
</script>

<style lang="scss">
  @import url("../../style/mixin.scss");
  .city_container {
    padding-top: 2.35rem;
  }
</style>
