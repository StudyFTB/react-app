import { combineReducers } from 'redux'
import {
  ADD_COUNT,
  REDUCE_COUNT,
  USER_INFO
} from './actions'

function computedCount(state = 0,action) {
  const { type, count } = action
  switch(type) {
    case ADD_COUNT: 
      return state + count;
    case REDUCE_COUNT:
      return state - count;
    default: 
      return state;
  }
}

function userInfo(state = {},action) {
  const {type,info} = action;
  switch(type) {
    case USER_INFO:
      return { ...state,...info };
    default:
      return state;
  }
}

const reducers = combineReducers({
  computedCount,
  userInfo
})

export default reducers