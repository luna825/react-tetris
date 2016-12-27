import * as reducerTypes from 'reducer/types'

let initailState  = 0;

export default function reducer(state=initailState, action){
  switch(action.type){
    case reducerTypes.START_LINES:
      return action.data
    default:
      return state
  }
}