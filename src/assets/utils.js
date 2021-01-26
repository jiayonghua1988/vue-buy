import { imageBase } from './const'
export const aa = 34

export const hello = () => {
  console.log('外部jshello  测试')
}
// 保存用户id
export const userId = () => {
  return token() === '' ? sessionStorage.getItem('userId') : token()
}
// 获取用户id
export const saveUserId = userId => {
  sessionStorage.setItem('userId', userId)
}

export const token = () => {
  return this.$store.state.token
}

export const imageUrl = link => {
  return imageBase + link
}

export const gradeStr = grade => {
  let gradeStr = ''
  switch (grade) {
    case 1:
      gradeStr = '小学一年级'
      break
    case 2:
      gradeStr = '小学二年级'
      break
    case 3:
      gradeStr = '小学三年级'
      break
    case 4:
      gradeStr = '小学四年级'
      break
    case 5:
      gradeStr = '小学五年级'
      break
    case 6:
      gradeStr = '小学六年级'
      break
    case 7:
      gradeStr = '初中一年级'
      break
    case 8:
      gradeStr = '初中二年级'
      break
    case 9:
      gradeStr = '初中三年级'
      break
    case 10:
      gradeStr = '高中一年级'
      break
    case 11:
      gradeStr = '高中二年级'
      break
    case 12:
      gradeStr = '高中三年级'
      break
  }
  return gradeStr
}
