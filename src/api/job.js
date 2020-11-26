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

export function fetchOpenJobList(query) {
  return service.request({
    url: '/v1/job-management/open-jobs',
    method: 'get',
    headers: headers
  })
}

export function fetchJobByCreator(id) {
  return service.request({
    url: '/v1/job-management/job-by-creator-id/' + id,
    method: 'get',
    headers: headers
    // params: { id },
  })
}

export function fetchJobList() {
  return service.request({
    url: '/v1/job-management/jobs',
    method: 'get',
    headers: headers
  })
}

export function fetchJob(id) {
  return service.request({
    url: '/v1/job-management/job/' + id,
    method: 'get',
    headers: headers
  })
}

export function createJob(data, method) {
  return service.request({
    url: '/v1/job-management/job',
    method: method,
    headers: headers,
    data: data
  })
}

export function publishJob(id) {
  return service.request({
    url: '/v1/job-management/job/' + id + '/publish',
    method: 'put',
    headers: headers
  })
}

export function closeJob(id) {
  return service.request({
    url: '/v1/job-management/job/' + id + '/close',
    method: 'put',
    headers: headers
  })
}

export function fetchCategory() {
  return service.request({
    url: '/v1/job-management/categories',
    method: 'get',
    headers: headers
  })
}
