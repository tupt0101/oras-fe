import request from '@/utils/request'

export function fetchAccountList() {
  return request({
    url: '/v1/account-management/accounts',
    method: 'get'
  })
}

export function fetchCompanyList() {
  return request({
    url: '/v1/company-management/companies',
    method: 'get'
  })
}
