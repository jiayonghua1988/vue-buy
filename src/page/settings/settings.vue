<template>
  <div class="setting-root">
    <section class="item-wrapper">
      <item-cell label="电话" :icon='iconPhone' :value="phone" line></item-cell>
      <item-cell label="一键清除未读消息" :icon='iconClean' line></item-cell>
    </section>
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
  border-radius: 30px;
  display: flex;
  flex-direction: column;
}
</style>
