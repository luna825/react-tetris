import {combineReducers} from 'redux'

import matrix from './matrix'
import cur from './cur'
import next from './next'
import startLines from './startLines'

const rootReducer = combineReducers({
  matrix,
  cur,
  next,
  startLines,
})

export default rootReducer