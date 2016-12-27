import {combineReducers} from 'redux'

import matrix from './matrix'
import cur from './cur'
import next from './next'

const rootReducer = combineReducers({
  matrix,
  cur,
  next,
})

export default rootReducer