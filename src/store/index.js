import { createStore } from 'redux'
import reducers from './reducers'
export * from './actions'

const store = createStore(reducers)

export default store;