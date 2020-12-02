// import request from '@/utils/request'
import axios from 'axios'
import { getToken } from '@/utils/auth'
import request from '@/utils/request'

// create an axios instance
const service = axios.create({
  // url = base url + request url
  baseURL: process.env.VUE_APP_BASE_API,
  withCredentials: true, // send cookies when cross-domain requests
  // credentials: 'same-origin',
  timeout: 30000 // request timeout
})

export function fetchPackageList() {
  return request({
    url: '/v1/package-management/packages',
    method: 'get'
  })
}

export function fetchPackage(id) {
  return request({
    url: '/v1/package-management/package/' + id,
    method: 'get'
  })
}

export function fetchCompanyPackage() {
  return request({
    url: '/v1/company-package-management/company-packages',
    method: 'get'
  })
}
