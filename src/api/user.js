import request from '@/utils/request'

const headers = {
  'Authorization': 'Basic bXktdHJ1c3RlZC1jbGllbnQ6c2VjcmV0'
}

export function login(data) {
  return request({
    url: '/test-api/user/login',
    // url: '/v1/account-management/accounts',
    // url: '/login',
    method: 'post',
    headers: headers,
    data
  })
}

export function getInfo(token) {
  return request({
    url: '/vue-element-admin/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return request({
    url: '/vue-element-admin/user/logout',
    method: 'post'
  })
}
