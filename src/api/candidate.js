import request from '@/utils/request'

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
