import { get } from '../utils/axios/methods'

enum url {
  list = '/menu'
}

export const menuList = () => {
  return get({ url: url.list })
}
