import request from '@/utils/request'
import axios from 'axios'

// create an axios instance
const service = axios.create({
  // url = base url + request url
  baseURL: process.env.VUE_APP_BASE_API,
  withCredentials: true, // send cookies when cross-domain requests
  // credentials: 'same-origin',
  timeout: 30000 // request timeout
})
export function getRoutes() {
  return service.request({
    url: '/vue-element-admin/routes',
    method: 'get'
  })
}

export function getRoles() {
  return service.request({
    url: '/vue-element-admin/roles',
    method: 'get'
  })
}

export function addRole(data) {
  return service.request({
    url: '/vue-element-admin/role',
    method: 'post',
    data
  })
}

export function updateRole(id, data) {
  return service.request({
    url: `/vue-element-admin/role/${id}`,
    method: 'put',
    data
  })
}

export function deleteRole(id) {
  return service.request({
    url: `/vue-element-admin/role/${id}`,
    method: 'delete'
  })
}
