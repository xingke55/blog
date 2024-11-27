import hyRequest from '..'
export const getCaptchaImage = (data: any) => {
  return hyRequest.request({
    url: '/captchaImage',
    method: 'POST',
    data
  })
}
export const login = (data: any) => {
  return hyRequest.request({
    url: '/login',
    method: 'POST',
    data
  })
}
