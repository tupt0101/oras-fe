import axios from 'axios'
import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  // url = base url + request url
  baseURL: process.env.VUE_APP_BASE_API,
  withCredentials: true, // send cookies when cross-domain requests
  // credentials: 'same-origin',
  timeout: 30000 // request timeout
})

export function fetchPanelData(accId) {
  return service.request({
    url: '/v1/job-management/job-statistic-by-creator-id/' + accId,
    method: 'get'
  })
}

export function fetchHiredList(accId) {
  return service.request({
    url: '/v1/report-management/time-to-hire/' + accId,
    method: 'get'
  })
}

export function fetchCandidateStatus(accId) {
  return service.request({
    url: '/v1/report-management/candidate-of-job/' + accId,
    method: 'get'
  })
}

