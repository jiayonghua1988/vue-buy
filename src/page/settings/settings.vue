<template>
  <div class="setting-root">
    <section class="item-wrapper">
      <item-cell label="电话" :icon='iconPhone' :value="phone" line></item-cell>
      <item-cell label="一键清除未读消息" :icon='iconClean'></item-cell>
    </section>
    <span class="btn-loginout" @click="logout">退出登录/注册</span>
  </div>
</template>

<script>
import IconPhone from '../../images/icon-phone.png'
import IconClean from '../../images/icon-clean.png'
import ItemCell from '../../components/item-cell'
export default {
  data () {
    return {
      iconPhone: IconPhone,
      iconClean: IconClean,
      phone: '13343223432432'
    }
  },
  methods: {
    logout () {
      this.$dialog.confirm(
        {
          message: '你确认要退出登录吗？'
        }).then(() => {
        console.log('确定------------')
      }).catch(() => {
        console.log('取消-------------')
      })
    }
  },
  components: {
    'item-cell': ItemCell
  }
}
</script>

<style>

.setting-root {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #f4f4f4;
}
.item-wrapper {
  margin: 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 5px;
  background-color: #fff;
}
.btn-loginout {
  background-color: #fff;
  border-radius: 10px;
  text-align: center;
  padding: 25px;
  margin: 200px 30px 0px 30px;
  font-size: 28px;
  color: #1B1B1F;
}
</style>
