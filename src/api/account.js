import request from '@/utils/request'

export function fetchAccountList() {
  return request({
    url: '/v1/account-management/accounts',
    method: 'get'
  })
}

export function fetchAccount(id) {
  return request({
    url: '/v1/account-management/account/' + id,
    method: 'get'
  })
}

export function updateAccount(data) {
  return request({
    url: '/v1/account-management/update-account',
    method: 'put',
    data: data
  })
}

export function changePassword(data) {
  return request({
    url: '/v1/account-management/change-password',
    method: 'put',
    data: data
  })
}

export function fetchCompanyList() {
  return request({
    url: '/v1/company-management/companies',
    method: 'get'
  })
}

export function updateCompany(data) {
  return request({
    url: '/v1/company-management/company',
    method: 'put',
    data: data
  })
}

export function createAccount(data, method) {
  debugger
  return request({
    url: '/v1/account-management/account',
    method: method,
    data: data
  })
}
