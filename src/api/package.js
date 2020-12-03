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

export function fetchCompanyPackage() {
  return request({
    url: '/v1/account-package-management/account-packages',
    method: 'get'
  })
}

export function getStarterPack(id) {
  return request({
    url: '/v1/account-package-management/starter-package/' + id,
    method: 'post'
  })
}
