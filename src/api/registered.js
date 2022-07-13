import request from '@/utils/request'

export const UserRegistered = data => {
  return request({
    method: 'POST',
    url: '/user/registered',
    data
  })
}
