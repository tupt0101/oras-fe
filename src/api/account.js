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

export function fetchAccountList() {
  return request({
    url: '/v1/account-management/accounts',
    method: 'get'
  })
}

export function fetchCompanyList() {
  return request({
    url: '/v1/company-management/companies',
    method: 'get'
  })
}
  })
}
