// import request from '@/utils/request'
import axios from 'axios'
import { getToken } from '@/utils/auth'

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
}

export function fetchPackageList() {
  return service.request({
    url: '/v1/package-management/packages',
    method: 'get',
    headers: headers
  })
}

export function fetchPackage(id) {
  return service.request({
    url: '/v1/package-management/package/' + id,
    method: 'get',
    headers: headers
  })
}

export function fetchCompanyPackage() {
  return service.request({
    url: '/v1/company-package-management/company-packages',
    method: 'get',
    headers: headers
  })
}
