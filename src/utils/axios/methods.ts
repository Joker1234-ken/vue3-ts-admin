import { AxiosRequestConfig } from 'axios'
import Axios from './index'
import { API } from './types'

const http = new Axios({
  baseURL: import.meta.env.VITE_APP_BASE_API as string,
  timeout: 5000
})

export const get = <T = any>(conf: AxiosRequestConfig): Promise<T> => {
  return http.request<T>({ ...conf, method: API.GET })
}

export const post = <T = any>(conf: AxiosRequestConfig): Promise<T> => {
  return http.request<T>({ ...conf, method: API.POST })
}

export const del = <T = any>(conf: AxiosRequestConfig): Promise<T> => {
  return http.request<T>({ ...conf, method: API.DELETE })
}

export const put = <T = any>(conf: AxiosRequestConfig): Promise<T> => {
  return http.request<T>({ ...conf, method: API.PUT })
}
