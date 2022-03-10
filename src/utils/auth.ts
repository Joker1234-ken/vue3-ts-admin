const TokenKey = 'token'
const TokenPrefix = 'Bearer '

const isLogin = (): boolean => {
  return !!localStorage.getItem(TokenKey)
}
const getToken = (): string | null => {
  return localStorage.getItem(TokenKey)
}
const setToken = (token: string): void => {
  localStorage.setItem(TokenKey, token)
}
const clearToken = (): void => {
  localStorage.removeItem(TokenKey)
}
export { TokenPrefix, isLogin, getToken, setToken, clearToken }
