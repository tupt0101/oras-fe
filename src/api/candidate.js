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
  'Authorization': 'Bearer ' + getToken(),
  'Content-Type': 'application/json'
}

export function fetchCandidateList(id) {
  return service.request({
    url: '/v1/job-application-management/job-applications-by-job-id/' + id,
    method: 'get',
    headers: headers
    // params: { id }
  })
}

export function fetchApplicationFromRP(id) {
  return service.request({
    url: '/v1/job-application-management/job-applications-openjob/' + id,
    method: 'get',
    headers: headers
  })
}

export function rankCV(id) {
  return service.request({
    url: '/v1/job-application-management/job-application-rank-cv',
    method: 'post',
    headers: headers,
    data: id
  })
}
