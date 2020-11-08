import request from '@/utils/request'
import axios from 'axios'

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
// create an axios instance
const service = axios.create({
  // url = base url + request url
  baseURL: process.env.VUE_APP_BASE_API,
  // baseURL: 'https://oras-api.herokuapp.com/',
  withCredentials: true, // send cookies when cross-domain requests
  // credentials: 'same-origin',
  timeout: 30000 // request timeout
})

const headers = {
  'Authorization': 'Basic bXktdHJ1c3RlZC1jbGllbnQ6c2VjcmV0',
  'Content-Type': 'application/json'
  // 'Content-Type': 'multipart/form-data',
  // 'Access-Control-Allow-Origin': '*'
}

export function login(data) {
  return service.request({
    url: '/login?username=' + data.username + '&password=' + data.password,
    method: 'get',
    headers: headers
  })
}

export function getInfo(email) {
  return service.request({
    url: '/v1/account-mananagement/account-by-email',
    method: 'get',
    params: { email }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
