import { getNextType } from 'unit'
import * as reducerTypes from 'reducer/types'

const initalState = getNextType()

export default function reducer(state= initalState, action){
  switch(action){
    case reducerTypes.NEXT_BLOCK:
      return action.data;
    default:
      return state;
  }
}