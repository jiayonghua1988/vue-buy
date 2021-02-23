<template>
  <div class="container-wrapper">
    <section class="content-wrapper">
      <section class="content-item">
        <span class="label">原手机： {{originalPhone}}</span>
      </section>
      <section class="content-item">
        <span class="label">新手机：</span>
        <input type="text" placeholder=" 请输入" v-model="newPhone" class="input-content" maxlength="11" @input="validatePhoen">
      </section>
      <section class="send-sms-wrapper">
        <section class="send-sms-input">
            <span class="label">验证码：</span>
            <input type="text" placeholder=" 请输入" v-model="msgCode" class="input-content" maxlength="6" @input="validateCode">
        </section>
        <section :class="{'send-sms' : btnLabelEnable,'send-sms-disenable' : !btnLabelEnable}" @click="sendMsg">{{btnLabel}}</section>
      </section>
    </section>
    <save-button label="保存" @btnClick='save'></save-button>
  </div>
</template>

<script>
import SaveButton from '../../components/save-button'

import { sendPhone } from '../../assets/requestUrl'
export default {
  data () {
    return {
      originalPhone: '13333333333',
      newPhone: '',
      msgCode: '',
      timeInterval: '',
      btnLabel: '发送验证码',
      btnLabelEnable: true
    }
  },
  components: {
    SaveButton
  },
  methods: {
    save () {
      this.$toast('AA')
    },
    validatePhoen () {
      this.newPhone = this.newPhone.replace(/\D/g, '')
    },
    validateCode () {
      this.msgCode = this.msgCode.replace(/\D/g, '')
    },
    sendMsg () {
      if (this.newPhone === '') {
        this.$toast('新手机号不能为空')
      } else {
        if (!this.btnLabelEnable) {
          return
        }
        sendPhone(this.newPhone, res => {
          this.$toast('验证码已发送')
          let timeLong = 60
          this.btnLabelEnable = false
          this.timeInterval = setInterval(() => {
            timeLong -= 1
            this.btnLabel = timeLong
            if (timeLong === 0) {
              this.btnLabelEnable = true
              clearInterval(this.timeInterval)
              this.timeInterval = null
            }
          }, 1000)
        })
      }
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
.content-item {
  display: flex;
  flex-direction: row;
  background-color: #F4F4F4;
  border-radius: 10px;
  margin: 30px 30px 0px 30px;
  height: 90px;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
}
.label {
  color: #666666;
  font-size: 28px;
  white-space: nowrap;
}
.send-sms {
  background-color: #69DC6B;
  width: 272px;
  height: 90px;
  color: #fff;
  font-size: 28px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 30px 30px 0px 0px;
  border-radius: 10px;
}
.input-content {
  color: #666666;
  font-size: 28px;
}
.send-sms-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 90px;
}
.send-sms-input {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 90px;
  background-color: #F4F4F4;
  flex: 1;
  margin: 30px 30px 0px 30px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 10px;
}
.send-sms-disenable {
  background-color: #D0CCCC;
  width: 272px;
  height: 90px;
  color: #fff;
  font-size: 28px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 30px 30px 0px 0px;
  border-radius: 10px;
}
</style>
