const actionContext = require.context('./modules',true, /action.js$/);
let actions = {}
actionContext.keys().forEach(item => {
  actions = { ...actions, ...actionContext(item) }
})

export default actions