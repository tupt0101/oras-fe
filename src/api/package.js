import request from '@/utils/request'

export function fetchPackageList() {
  return request({
    url: '/v1/package-management/packages',
    method: 'get'
  })
}

export function fetchPackage(id) {
  return request({
    url: '/v1/package-management/package/' + id,
    method: 'get'
  })
}

export function fetchAccountPackage() {
  return request({
    url: '/v1/account-package-management/account-packages',
    method: 'get'
  })
}

export function fetchAccountPackageWithPagination(query) {
  return request({
    url: '/v1/account-package-management/account-packages-paging?numOfElement=' + query.limit + '&page=' + query.page,
    method: 'get'
  })
}

export function getStarterPack(id) {
  return request({
    url: '/v1/account-package-management/starter-package/' + id,
    method: 'post'
  })
}

export function getCurrentPackage(id) {
  return request({
    url: '/v1/account-package-management/current-account-package-by-account-id/' + id,
    method: 'get'
  })
}

export function cancelPackage(id) {
  return request({
    url: '/v1/account-package-management/cancel-account-package/' + id,
    method: 'put'
  })
}

export function checkValidAccount(url) {
  return request({
    url: url,
    method: 'get'
  })
}

export function editPackage(data, method) {
  return request({
    url: '/v1/package-management/package',
    method: method,
    data: data
  })
}

export function deactivatePackage(id) {
  return request({
    url: '/v1/package-management/deactivate',
    method: 'put',
    data: id
  })
}
