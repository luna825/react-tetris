import {List} from 'immutable'
import { blankMatrix } from 'unit/const'

import * as reducerType from 'reducer/types'

const initailState = blankMatrix

export default function reducer(state=initailState, action){
  switch(action.type){
    case reducerType.MATRIX:
      return action.data;
    default:
      return state;
  }
}
