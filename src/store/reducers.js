import { combineReducers } from 'redux'

const reducerContext = require.context('./modules',true, /reducer.js$/);
let reducerList = {}
reducerContext.keys().forEach(item => {
  const key = item.split('/')[1];
  reducerList = { ...reducerList, [key]: reducerContext(item).default }
})

const reducers = combineReducers({
  ...reducerList
})

export default reducers;