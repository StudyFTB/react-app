import {
  GET_USERINFO,
  GET_USERINFO_SUCCESS,
  GET_USERINFO_ERROR
} from './action'

const initState = {
  userInfo: {}
}

const user = (state = initState, action) => {
  switch(action.type) {
    case GET_USERINFO: 
      return state;
    case GET_USERINFO_SUCCESS:
      return { ...state, userInfo:action.payload };
    case GET_USERINFO_ERROR:
      return initState
    default:
      return state;
  }
}

export default user;