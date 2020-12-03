import request from '@/utils/request'

export function fetchTotalCandidate(jobId) {
  return request({
    url: '/v1/job-application-management/job-applications-by-job-id/' + jobId,
    method: 'get'
  })
}

export function fetchCandidateList(jobId, query) {
  return request({
    url: '/v1/job-application-management/job-applications-by-job-id?jobId=' + jobId + '&numOfElement=' + query.limit + '&page=' + query.page,
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
