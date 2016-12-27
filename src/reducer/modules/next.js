import { getNextType } from 'unit'
import * as reducerTypes from 'reducer/types'


let initalState = getNextType()

export default function reducer(state= initalState, action){
  switch(action.type){
    case reducerTypes.NEXT_BLOCK:
      return action.data;
    default:
      return state;
  }
}