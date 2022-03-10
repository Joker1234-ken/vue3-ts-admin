export interface RouterType {
  id: number
  p_id: number
  path: string
  title: string
  hidden?: boolean
  icon?: string
  component: string
}

export interface UserType {
  username: string
  password: string
}
