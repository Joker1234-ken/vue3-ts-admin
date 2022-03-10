import { get } from '../utils/axios/methods'

enum url {
  list = '/menu'
}

export const getMenuList = () => get({ url: url.list })
