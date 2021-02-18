import Vue from 'vue'
// 这里定义网络请求的url和方法
import axios from 'axios'
import { Toast } from 'vant'
import 'vant/lib/index.css'

//  全局变量
Vue.prototype.$axios = axios
axios.defaults.baseURL = '/web/'
Vue.config.productionTip = false

// axios.interceptors.response.use(response => {
//   console.log(response)
//   if (response.message.includes('401')) {
//     this.$router.push('/')
//   }
//   return response
// }, error => {
//   return error
// })

// 发送手机验证码
export function sendPhone (phone, success, fail) {
  get('/auth/validateCode/send?phone=' + phone, success, fail)
}
// 登录
export function authPhone (data, success, fail) {
  post('/auth/phone', data, success, fail)
}
// 获取当前位置
export function getCity (success, fail) {
  get('https://restapi.amap.com/v3/ip?key=5c67b80bd27297a360b9db433f3ea74f', success, fail)
}

// 获取家长信息
export function userParents (parentId, success, fail) {
  get('/api/user/parents/' + parentId, success, fail)
}

// 新增意见反馈信息
export function addComplain (data, success, fail) {
  post('/api/complain/addComplain')
}
// 获取反馈列表
export function searchComplain (success, fail) {
  get('/api/complain/searchComplain?parentId=' + sessionStorage.getItem('userId'), success, fail)
}
// 反馈详情
export function getComplain (id, success, fail) {
  get('/api/complain/getComplain/' + id, success, fail)
}

export function get (url, success, fail) {
  axios({
    url: url,
    method: 'get',
    params: {},
    headers: {
      'x-client-token-user': sessionStorage.getItem('token')
    }
  }).then(res => {
    callback(res, success, fail)
  })
}

export function post (url, data, success, fail) {
  axios({
    url: url,
    method: 'post',
    data: data,
    headers: {
      'x-client-token-user': sessionStorage.getItem('token')
    }
  }).then(res => {
    callback(res, success, fail)
  })
}

function callback (res, success, fail) {
  console.log(JSON.stringify(res))
  if (res.data.code === 0 || res.data.status === '1') {
    success(res)
  } else {
    console.log('fail=' + typeof (fail))
    if (fail === 'undefined') {
      fail(res)
    } else {
      Toast.fail(res.data.message)
    }
  }
}
