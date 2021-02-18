<template name="btn-button">
  <div class="btn-button" @click="btnClick">
    {{label}}
  </div>
</template>

<script>
export default {
  props: {
    label: String
  },
  methods: {
    btnClick () {
      this.$emit('btnClick')
    }
  }
}
</script>

<style>
  .btn-button {
    background-color: #69DC6B;
    color: #fff;
    font-size: 36px;
    text-align: center;
    padding: 25px 0px;
    margin: 50px;
    border-radius: 40px;
  }
</style>
