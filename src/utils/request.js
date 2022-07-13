import axios from 'axios'
import store from '@/store'

const request = axios.create({
  baseURL: 'http://liufusong.top:8080/' // 基础路径
})
// 请求拦截器
request.interceptors.request.use(function (config) {
  const { user } = store.state
  if (user && user.token) {
    config.headers.Authorization = `${user.token}`
  }
  console.log(config)
  return config
}, function (error) {
  return Promise.reject(error)
})
export default request
