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
        <input type="tel" placeholder="请输入验证码" maxlength="6" v-model="code" @input="codeChange" class="inputCode">
      <span :class="btnCodeStyle" @click="getPhoneCode">{{btnCodeText}}</span>
    </section>
    <div :class="btnLoginStyle" @click="login">登录/注册</div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      phone: '',
      code: '',
      loginIsEnable: false,
      btnCodeText: '发送验证码',
      btnCodeTextColor: '#969696',
      btnCodeIsRunint: false,
      timeInterval: ''
    }
  },
  computed: {
    btnLoginStyle: function () {
      return this.phone.length > 0 && this.code.length > 0 ? 'btn_login_enable' : 'btn_login'
    },
    btnCodeStyle: function () {
      return this.phone.length > 0 && !this.timeInterval ? 'btn_code' : 'btn_code_disable'
    },
    ...mapMutations([
      'saveUserId'
    ])
  },
  methods: {
    getPhoneCode () {
      if (this.phone.length === 0 || this.timeInterval) {
        return
      }
      let timeLong = 60
      if (timeLong === 60) {
        this.timeInterval = setInterval(() => {
          timeLong -= 1
          this.btnCodeTextColor = '#969696'
          this.btnCodeText = timeLong + 'S'
          console.log('倒计时：' + timeLong)
          if (timeLong === 1) {
            clearInterval(this.timeInterval)
            this.btnCodeText = '重新获取'
            this.btnCodeTextColor = '#22AC38'
          }
        }, 1000)
      }
      this.$axios({
        url: '/auth/validateCode/send?phone=' + this.phone,
        method: 'get',
        params: {}
      }).then(res => {
        const isSuccess = res.data.code === 0
        if (isSuccess) {
          this.$toast.success('验证码已发送')
        } else {
          this.$toast.fail(res.data.message)
        }
      })
    },
    login () {
      this.$axios({
        url: '/auth/phone',
        method: 'post',
        data: {
          phone: this.phone,
          verifyCode: this.code,
          userType: 'P',
          source: 3,
          register: true,
          device: 'Android-Parent'
        }
      }).then(res => {
        if (res.data.code === 0) {
          console.log(JSON.stringify(res))
          this.$toast.success('登录成功')
          const userId = res.data.data.userInfo.securityId
          console.log('userId=$userId')
          debugger
          this.$store.commit('saveUserId', userId)
          this.$router.push({
            path: '/city'
          })
        } else {
          this.$toast.fail(res.data.message)
        }
      })
    },
    phoneChange () {
      this.phone = this.phone.replace(/\D/g, '')
      this.btnCodeTextColor = this.phone.length === 0 ? '#969696' : '#22AC38'
      if (this.phone.length === 0) {
        this.btnCodeText = '发送验证码'
      }
    },
    codeChange () {
      this.code = this.code.replace(/\D/g, '')
    }
  }
}
</script>

<style>
body {
  background: #fff;
}
.login_logo {
  width: 300px;
  align-self: center;
  padding-top: 192px;
  padding-bottom: 100px;
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
}
.btn_code {
  font-size: 28px;
  color: #22AC38;
  border-left: 1px solid #DEDCDC;
  padding-left: 20px;
  width: 200px;
  text-align: center;
}
.btn_code_disable {
  font-size: 28px;
  color: #CDCDCD;
  border-left: 1px solid #DEDCDC;
  padding-left: 20px;
  width: 200px;
  text-align: center;
}
.btn_login {
  margin-top: 100px;
  margin-left: 30px;
  margin-right: 30px;
  border-radius: 100px;
  background: #CDCDCD;
  height: 90px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  line-height: 90px;
}
.btn_login_enable {
  margin-top: 100px;
  margin-left: 30px;
  margin-right: 30px;
  border-radius: 100px;
  background: #69DC6B;
  height: 90px;
  color: #fff;
  font-size: 30px;
  text-align: center;
  line-height: 90px;
}
</style>
