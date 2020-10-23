import request from '@/utils/request'

export function fetchOpenJobList(query) {
  return request({
    url: '/v1/job-management/open-jobs',
    method: 'get',
    params: query
  })
}
