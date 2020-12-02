import request from '@/utils/request'
import axios from 'axios'
// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  withCredentials: true, // send cookies when cross-domain requests
  credentials: 'same-origin',
  timeout: 30000 // request timeout
})

const headers = {
  // 'Authorization': 'Bearer ' + getToken()
}
export function fetchList() {
  return service.request({
    url: '/vue-element-admin/article',
    method: 'get',
    headers: headers
  })
}

export function fetchArticle(id) {
  return service.request({
    url: '/vue-element-admin/article/detail',
    method: 'get',
    params: { id }
  })
}

export function fetchPv(pv) {
  return service.request({
    url: '/vue-element-admin/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return service.request({
    url: '/vue-element-admin/article/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return service.request({
    url: '/vue-element-admin/article/update',
    method: 'post',
    data
  })
}
