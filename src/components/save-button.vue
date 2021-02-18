<template name="btn-button">
  <div class="btn-container">
    <section class="btn-button" @click="btnClick">
       {{label}}
    </section>

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
    padding: 25px 50px;
    border-radius: 40px;
    box-sizing: border-box;
    width: 700px;
  }
  .btn-container {
    margin: 50px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
</style>
