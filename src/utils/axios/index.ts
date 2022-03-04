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
      return req
    }, error)

    this.axiosInstance.interceptors.response.use((res: AxiosResponse) => {
      return res.data
    }, error)
  }

  request<T = any>(conf: AxiosRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.axiosInstance
        .request<any, AxiosResponse<IResponse<T>>>(conf)
        .then((result: AxiosResponse<IResponse<T>>) =>
          resolve(result as T | any)
        )
        .catch((error: Error) => {
          reject(error)
        })
    })
  }
}
