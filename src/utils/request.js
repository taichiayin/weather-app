import axios from 'axios'

const service = axios.create({
  baseURL: '/',
  timeout: 10000
})

// 拦截请求
service.interceptors.request.use(
  (config) => {
    // config.headers['Access-Control-Allow-Credentials'] = true
    // config.headers['Access-Control-Allow-Origin'] = '*'

    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 拦截响应
service.interceptors.response.use((response) => {
  return response.data
})

export default service
