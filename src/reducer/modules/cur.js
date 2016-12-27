import { List } from 'immutable'
import Block from 'unit/block'
import * as reducerType from 'reducer/types'


const initailState = (()=>{
  return null

})();

export default function reducer(state=initailState, action){
  switch(action.type){
    case reducerType.MOVE_BLOCK:
      return action.data
    default:
      return state
  }
}
