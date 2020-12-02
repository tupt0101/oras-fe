import request from '@/utils/request'
import axios from 'axios'
// import { getToken } from '@/utils/auth'

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
// create an axios instance
const service = axios.create({
  // url = base url + request url
  baseURL: process.env.VUE_APP_BASE_API,
  withCredentials: true, // send cookies when cross-domain requests
  // credentials: 'same-origin',
  timeout: 30000 // request timeout
})

export function login(data) {
  return request({
    url: '/login?username=' + data.username + '&password=' + data.password,
    method: 'get'
  })
}

export function getInfo(email, token) {
  return request({
    url: '/v1/account-management/account-by-email',
    method: 'get',
    params: { email }
  })
}

export function logout() {
  return service.request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}

export function signup(data) {
  return request({
    url: '/v1/account-management/signup',
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data: data
  })
}
