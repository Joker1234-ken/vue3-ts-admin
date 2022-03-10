import { getToken, isLogin, TokenPrefix } from '../../utils/auth'
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { error } from './error'
import { IResponse } from './types'

export default class Axios {
  axiosInstance!: AxiosInstance
  constructor(conf: AxiosRequestConfig) {
    this.axiosInstance = this.createAxios(conf)

    this.interceptors()
  }

  createAxios(conf: AxiosRequestConfig) {
    return axios.create(conf)
  }

  interceptors() {
    this.axiosInstance.interceptors.request.use((req: AxiosRequestConfig) => {
      if (isLogin()) {
        ;(req.headers as any).authorization = TokenPrefix + getToken()
      }
      return req
    }, error)

    this.axiosInstance.interceptors.response.use(
      (res: AxiosResponse<IResponse>) => {
        const { code, message } = res.data

        if (code !== 0) {
          ElNotification({
            title: 'Error',
            message,
            type: 'error'
          })
        }

        return res.data
      },
      error
    )
  }

  request<T = any>(config: AxiosRequestConfig): Promise<T> {
    const conf = config
    return new Promise(resolve => {
      this.axiosInstance
        .request<any, AxiosResponse<T>>(conf)
        .then((res: AxiosResponse<T>) => {
          resolve(res as unknown as Promise<T>)
        })
    })
  }
}
