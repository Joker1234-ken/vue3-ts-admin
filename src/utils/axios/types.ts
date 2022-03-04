export enum API {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  PUT = 'PUT'
}

export interface IResponse<T = any> {
  code: number
  message: string
  data: T
}
