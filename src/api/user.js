import request from '@/utils/request'
import axios from 'axios'
import { getToken } from '@/utils/auth'

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
// create an axios instance
const service = axios.create({
  // url = base url + request url
  // baseURL: process.env.VUE_APP_BASE_API,
  // baseURL: 'http://localhost:8080/',
  baseURL: 'https://oras-api.herokuapp.com/',
  withCredentials: true, // send cookies when cross-domain requests
  // credentials: 'same-origin',
  timeout: 30000 // request timeout
})

const headers = {
  'Authorization': 'Bearer ' + getToken()
  // 'Content-Type': 'application/json'
  // 'Content-Type': 'multipart/form-data',
  // 'Access-Control-Allow-Origin': '*'
}

export function login(data) {
  return service.request({
    url: '/login?username=' + data.username + '&password=' + data.password,
    method: 'get'
    // headers: headers
  })
}

export function getInfo(email, token) {
  return service.request({
    url: '/v1/account-management/account-by-email',
    method: 'get',
    headers: { 'Authorization': 'Bearer ' + token },
    params: { email }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}

export function signup(data) {
  return service.request({
    url: '/signup',
    method: 'post',
    headers: headers
  })
}
