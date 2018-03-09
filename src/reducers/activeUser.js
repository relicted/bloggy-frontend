


export default function(state=null, action){
  if (action.type === 'LOGIN_SUCCESS'){
    return action.payload
  }
  return state
}