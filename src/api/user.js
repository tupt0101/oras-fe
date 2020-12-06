import request from '@/utils/request'

export function login(data) {
  return request({
    url: '/login?username=' + data.username + '&password=' + data.password,
    method: 'get'
  })
}

export function getInfo(email, token) {
  return request({
    url: '/v1/account-management/account-by-email',
    method: 'get',
    params: { email }
  })
}

export function signup(data) {
  return request({
    url: '/v1/account-management/signup',
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data: data
  })
}

export function resetPassword(email) {
  return request({
    url: '/v1/account-management/reset-password/' + email,
    method: 'post'
  })
}

export function fetchAccountData(id) {
  return request({
    url: '/v1/account-management/account/' + id,
    method: 'get'
  })
}

export function fetchActivities(id) {
  return request({
    url: '/v1/activity-management/activity-by-creator-id/' + id,
    method: 'get'
  })
}
