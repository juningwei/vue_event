import request from '@/utils/request'
import store from '@/store'
export const registerAPI = ({ username, password, repassword }) => {
  return request({
    url: '/api/reg',
    method: 'post',
    data: {
      username,
      password,
      repassword
    }
  })
}

export const loginAPI = ({ username, password }) => {
  return request({
    url: '/api/login',
    method: 'post',
    data: {
      username,
      password
    }
  })
}

export const getUserInfoAPI = () => {
  return request({
    url: '/my/userinfo',
    headers: {
      Authorization: store.state.token
    }
  })
}
