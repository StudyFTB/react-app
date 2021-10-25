export const ADD_COUNT= 'ADD_COUNT'; // 增加数量
export const REDUCE_COUNT= 'REDUCE_COUNT'; // 减少数量

export function addCount(count) {
  return { type: ADD_COUNT, count }
}

export function reduceCount(count) {
  return { type: REDUCE_COUNT, count }
}