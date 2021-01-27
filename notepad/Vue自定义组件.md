### Vue自定义组件
> 自定义一个 Cell itemCell.vue

```
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
  // 定义组件的属性
  props: {
    icon: String,
    label: String,
    value: String,
    line: Boolean
  },
  methods: {
    itemClick () {
      // 定义组件的方法
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
  width: 42px;
  height: 42px;
  padding-left: 20px;
}
.bottom-line {
  border-bottom: 2px solid #E1E1E5;
}
</style>

```

#### 使用

```
<item-cell label="基本资料" :icon="icon1" class="margin-top10" @cellClick="gotoUserInfo"></item-cell>

<script>
import ItemCell from '../../components/item-cell'
 components: {
    ItemCell
  },
  methods: {
  gotoUserInfo () {
      console.log('用户信息=================')
    }
  }
</script>
```
