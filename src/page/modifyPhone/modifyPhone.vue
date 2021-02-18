<template>
  <div class="container-wrapper">
    <section class="content-wrapper">

    </section>
    <save-button label="保存" @btnClick='save'></save-button>
  </div>
</template>

<script>
import SaveButton from '../../components/save-button'
export default {
  components: {
    SaveButton
  },
  methods: {
    save () {
      this.$toast('AA')
    }
  }
}
</script>

<style>
.container-wrapper {
  background-color: #fff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.btnSave {
  background-color: #69DC6B;
  border-radius: 30px;
  padding: 20px 0px;
  color: #fff;
  font-size: 36px;
  text-align: center;
  margin: 50px;
}
</style>
