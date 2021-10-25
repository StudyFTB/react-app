import { GetAd } from '@/apis/user'

export const GET_USERINFO = 'GET_USERINFO'; // 获取用户信息
export const GET_USERINFO_SUCCESS = 'GET_USERINFO_SUCCESS'; // 获取用户信息成功
export const GET_USERINFO_ERROR = 'GET_USERINFO_ERROR'; // 获取用户信息失败

export const getUserInfo = () => {
  return {
    type: GET_USERINFO
  }
}
export const getUserInfoSuccess = (info) => {
  return {
    type: GET_USERINFO_SUCCESS,
    payload: info
  }
}
export const getUserInfoError = () => {
  return {
    type: GET_USERINFO_ERROR
  }
}

// 异步请求用户信息
export const requestUserInfo = (data) => {
  return dispatch => {
    dispatch(getUserInfo());
    return GetAd(data).then(info => {
      dispatch(getUserInfoSuccess(info));
    }).catch(e => {
      dispatch(getUserInfoError);
    })
  }
}