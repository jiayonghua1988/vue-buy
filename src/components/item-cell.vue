<template>
<div class="flex-row-between bg-color" :class="{'bottom-line' : line}" @click="itemClick">
  <section class="flex-row-center">
    <slot class="img-icon"></slot>
    <span class="label">{{label}}</span>
  </section>
  <section class="value-wrapper">
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
    line: Boolean
  },
  methods: {
    itemClick () {
      this.$emit('cellClick')
    }
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
  padding-left: 20px;
}
.bottom-line {
  border-bottom: 2px solid #E1E1E5;
}
.value-wrapper {
  align-self: center;
}
</style>
