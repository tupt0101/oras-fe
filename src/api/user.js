import request from '@/utils/request'
import axios from 'axios'

// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // baseURL: 'https://oras-api.herokuapp.com',
  // baseURL: 'http://localhost:8080/oras',
  baseURL: 'http://localhost/oras',
  withCredentials: true, // send cookies when cross-domain requests
  // credentials: 'same-origin',
  timeout: 30000 // request timeout
})

const headers = {
  'Authorization': 'Basic bXktdHJ1c3RlZC1jbGllbnQ6c2VjcmV0',
  'Content-Type': 'multipart/form-data'
}

export function login(data) {
  const bodyFormData = new FormData()
  bodyFormData.append('grant_type', 'password')
  bodyFormData.append('username', data.username)
  bodyFormData.append('password', data.password)
  return service.request({
    // url: '/test-api/user/login',
    // url: '/v1/account-management/accounts',
    // url: '/login',
    method: 'post',
    headers: headers,
    data: bodyFormData
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
