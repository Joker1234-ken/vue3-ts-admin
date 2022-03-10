import { post } from '../utils/axios/methods'
import { UserType } from '../store/modules/types'

enum url {
  login = '/user/login',
  userInfo = '/user/getInfo'
}

interface LoginData {
  token: string
}

interface UserInfo extends LoginData {
  permissions: string[]
  roles: string[]
}

export const setLogin = (data: UserType) =>
  post<LoginData>({ url: url.login, data })

export const getUserInfo = () => post<UserInfo>({ url: url.userInfo })
