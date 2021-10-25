import {
  ADD_COUNT,
  REDUCE_COUNT
} from './action'

const initState = {
  count: 0
}

const common = (state = initState,action) => {
  const { type, count } = action
  switch(type) {
    case ADD_COUNT: 
      return {
        ...state,
        count: state.count + count
      };
    case REDUCE_COUNT:
      return {
        ...state,
        count: state.count - count
      };
    default: 
      return state;
  }
}

export default common;