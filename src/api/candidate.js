import axios from 'axios'
import { getToken } from '@/utils/auth'
import request from '@/utils/request'

// create an axios instance
const service = axios.create({
  // url = base url + request url
  baseURL: process.env.VUE_APP_BASE_API,
  withCredentials: true, // send cookies when cross-domain requests
  // credentials: 'same-origin',
  timeout: 120000 // request timeout
})

export function fetchCandidateList(id) {
  return request({
    url: '/v1/job-application-management/job-applications-by-job-id/' + id,
    method: 'get'
  })
}

export function fetchApplicationFromRP(id) {
  return request({
    url: '/v1/job-application-management/job-applications-openjob/' + id,
    method: 'get'
  })
}

export function rankCV(id) {
  return request({
    url: '/v1/job-application-management/job-application-rank-cv',
    method: 'post',
    data: id
  })
}
