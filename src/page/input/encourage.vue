<template>
  <div class="root-wrapper">
    <section class="input-container">
      <span class="iconfont input-clear">&#xe696;</span>
      <input type="text" class="input-content" maxlength="30" placeholder="请输入鼓励语">
    </section>
    <section class="save-btn-wrapper">
      <save-button label="保存" ></save-button>
    </section>

  </div>
</template>

<script>

import saveButton from '../../components/save-button'
export default {
  components: {
    saveButton
  }
}
</script>

<style>

  .root-wrapper {
    height: 100vh;
    background-color: #F4F4F4;
    display: flex;
    flex-direction: column;

  }
  .input-container {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    background-color: #fff;
  }
  .input-content {
    color: #28282C;
    font-size: 32px;
    height: 80px;
    flex-grow: 1;
    margin-right: 20px;
  }
  .input-clear {
    font-size: 28px;
  }
  .btn-save {
    height: 80px;
    background-color: #69DC6B;
    font-size: 36px;
    color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 60px 20px;
    border-radius: 40px;
  }
  .save-btn-wrapper {
    margin: 50px;
  }
</style>
