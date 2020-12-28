<template>
  <div class="container">
    <section class="login_logo">
        <img src="../../images/icon_login_logo.png"/>
    </section>
    <section class="phone">
      <span class="phone_label">+ 86</span>
      <span><input type="tel" placeholder="请输入手机号" maxlength="11" v-model="phone" @input="phoneChange" class="input_phone"></span>
    </section>
    <section class="phoneCode">
        <input type="text" placeholder="请输入验证码" maxlength="6" v-model="code" @input="phoneChange" class="inputCode">
      <span class="btn_code" :class="{color:btnCodeTextColor}" @click="getPhoneCode">{{btnCodeText}}</span>
    </section>
    <button class="btn_login" @click="login">登录/注册</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      phone: '',
      code: '',
      loginIsEnable: false,
      btnCodeText: '获取验证码',
      btnCodeTextColor: '#22AC38',
      btnCodeIsRunint: false,
      timeLong: 60,
      timeInterval: ''
    }
  },
  methods: {
    getPhoneCode () {
      if (this.timeLong === 60) {
        this.btnCodeTextColor = '#969696'
        this.timeInterval = setInterval(() => {
          this.timeLong -= 1
          this.btnCodeText = this.timeLong + 'S'
          console.log('倒计时：' + this.timeLong)
          if (this.timeLong === 1) {
            clearInterval(this.timeInterval)
            this.btnCodeText = '重新获取'
            this.btnCodeTextColor = '#22AC38'
            this.timeLong = 60
          }
        }, 1000)
      }
    },
    login () {
      if (this.loginIsEnable) {

      }
    },
    phoneChange () {
      this.phone = this.phone.replace(/\D/g, '')
    }
  }
}
</script>

<style>
.login_logo {
  width: 300px;
  align-self: center;
  margin-top: 192px;
  margin-bottom: 100px;
}
.login_logo img {
  width: 100%;
  height: 100%;
}
.inputCode {
  font-size: 32px;
  color: #151515;
}
.phone,.phoneCode {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: solid 1px #E7E7E7;
  height: 100px;
}

.phoneCode {
  justify-content: space-between;
}
.phone_label {
  font-size: 32px;
  color: #4A4A4A;
  padding: 0px 15px;
  border-right: 1px solid #DEDCDC;
  margin-right: 10px;
}
.input_phone {
  background: transparent;
  font-size: 32px;
  color: #151515;
}
.container {
  padding: 0px 20px;
  height: 100vh;
}
.btn_code {
  font-size: 28px;
  color: #22AC38;
  border-left: 1px solid #DEDCDC;
  padding-left: 20px;
  width: 200px;
  text-align: center;
}
.btn_login {
  margin: 100px 30px;
  border-radius: 100px;
  background: #CDCDCD;
  height: 90px;
  color: #fff;
  font-size: 30px;
}
</style>
