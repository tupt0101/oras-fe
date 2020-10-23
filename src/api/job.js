import request from '@/utils/request'

export function fetchOpenJobList(query) {
  return request({
    url: '/v1/job-management/open-job',
    method: 'get',
    params: query
  })
}
