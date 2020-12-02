import request from '@/utils/request'

export function fetchPanelData(accId) {
  return request({
    url: '/v1/job-management/job-statistic-by-creator-id/' + accId,
    method: 'get'
  })
}

export function fetchHiredList(accId) {
  return request({
    url: '/v1/report-management/time-to-hire/' + accId,
    method: 'get'
  })
}

export function fetchCandidateStatus(accId) {
  return request({
    url: '/v1/report-management/candidate-of-job/' + accId,
    method: 'get'
  })
}

