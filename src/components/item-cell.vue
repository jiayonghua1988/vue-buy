<template>
<div class="flex-row-between bg-color" :class="{'bottom-line' : line}" @click="itemClick">
  <section class="flex-row-center">
    <img :src="icon" alt="" class="img-icon">
    <span class="label">{{label}}</span>
  </section>
  <section>
    <span class="value">{{value}}</span>
    <i class="right-arrow iconfont">&#xe87b;</i>
  </section>
</div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    icon: String,
    label: String,
    value: String,
    line: Boolean,
    itemClick: Function
  }
}
</script>

<style>
.bg-color {
  background-color: white;
  height: 100px;
  line-height: 80px;
}
.label {
  color: #333333;
  font-size: 33px;
  padding-left: 20px;
}
.value {
  color: #9E9EA4;
  font-size: 28px;
  width: 280px;
}
.right-arrow {
  font-size: 30px;
}
.img-icon {
  width: 42px;
  height: 42px;
  padding-left: 20px;
}
.bottom-line {
  border-bottom: 2px solid #E1E1E5;
}
</style>
