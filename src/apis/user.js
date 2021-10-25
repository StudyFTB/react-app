import service from '../utils/request';

/**
 * 登录
 * @param {*} data 
 */
export function Login(data) {
  return service.request({
    url: '/login/',
    method: 'post',
    data
  })
}

/**
 * 注册
 * @param {*} data 
 * @returns 
 */
export function Register(data) {
  return service.request({
    url: '/register/',
    method: 'post',
    data
  })
}

/**
 * 获取验证码
 * @param {
 * moudle: login/register 模块类型
 * } data 
 * @returns 
 */
export function GetLoginSms(data) {
  return service.request({
    url: '/getSms/',
    method: 'post',
    data: {...data,module: 'login'}
  })
}
export function GetRegisterSms(data) {
  return service.request({
    url: '/getSms/',
    method: 'post',
    data: {...data,module: 'register'}
  })
}

export function GetAd(data) {
  return service.request({
    url: '/fl/api/carousel/list',
    method: 'get',
    params: data
  })
}