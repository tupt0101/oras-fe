import request from '@/utils/request'
import axios from 'axios'

// create an axios instance
const service = axios.create({
  // url = base url + request url
  baseURL: process.env.VUE_APP_BASE_API,
  withCredentials: true, // send cookies when cross-domain requests
  // credentials: 'same-origin',
  timeout: 30000 // request timeout
})
export function searchUser(name) {
  return service.request({
    url: '/vue-element-admin/search/user',
    method: 'get',
    params: { name }
  })
}

export function transactionList(query) {
  return service.request({
    url: '/vue-element-admin/transaction/list',
    method: 'get',
    params: query
  })
}
