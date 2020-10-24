// import request from '@/utils/request'
import axios from 'axios'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  // baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // baseURL: 'https://oras-api.herokuapp.com',
  baseURL: 'http://localhost:8080',
  // baseURL: 'http://localhost/oras',
  withCredentials: true, // send cookies when cross-domain requests
  // credentials: 'same-origin',
  timeout: 30000 // request timeout
})

const headers = {
  'Authorization': 'Bearer ' + getToken()
}

export function fetchOpenJobList(query) {
  return service.request({
    url: '/v1/job-management/open-jobs',
    method: 'get',
    headers: headers
  })
}

export function fetchJobList() {
  return service.request({
    url: '/v1/job-management/jobs',
    method: 'get',
    headers: headers
  })
}