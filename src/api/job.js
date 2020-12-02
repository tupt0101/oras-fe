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

export function fetchOpenJobList(query) {
  return request({
    url: '/v1/job-management/open-jobs',
    method: 'get'
  })
}

export function fetchJobByCreator(id) {
  return request({
    url: '/v1/job-management/job-by-creator-id/' + id,
    method: 'get'
  })
}

export function fetchOpenJobByCreator(id) {
  return request({
    url: '/v1/job-management/open-job-by-creator-id/' + id,
    method: 'get'
  })
}

export function fetchJobList() {
  return request({
    url: '/v1/job-management/jobs',
    method: 'get'
  })
}

export function fetchJob(id) {
  return request({
    url: '/v1/job-management/job/' + id,
    method: 'get'
  })
}

export function createJob(data, method) {
  return request({
    url: '/v1/job-management/job',
    method: method,
    data: data
  })
}

export function publishJob(id) {
  return request({
    url: '/v1/job-management/job/' + id + '/publish',
    method: 'put'
  })
}

export function closeJob(id) {
  return request({
    url: '/v1/job-management/job/' + id + '/close',
    method: 'put'
  })
}

export function fetchCategory() {
  return request({
    url: '/v1/job-management/categories',
    method: 'get'
  })
}
