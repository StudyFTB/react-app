/*
 * action 类型
 */

export const ADD_COUNT= 'ADD_COUNT'; // 增加数量
export const REDUCE_COUNT= 'REDUCE_COUNT'; // 减少数量
export const USER_INFO = 'USER_INFO' // 用户信息

/*
 * action 创建函数
 */

export function addCount(count) {
  return { type: ADD_COUNT, count }
}

export function reduceCount(count) {
  return { type: REDUCE_COUNT, count }
}

export function userInfo(info) {
  return { type: USER_INFO, info }
}