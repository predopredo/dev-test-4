const defaultState = {};
export default (state = defaultState, action) =>{
  switch(action.type) {
    case 'SET_CONTENT':
      return action.content
    default:
      return state
  }
};