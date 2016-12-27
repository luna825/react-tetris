import {List} from 'immutable'
import * as actions from  'reducer/actions'
import store from 'reducer/store'
import {blankLine} from 'unit/const'

/**
 * 起始难度控制
 * @param  {[array]} startLines [初始难度行数]
 * @return {[List]}             [带有难度的矩阵]
 */
const getStartMatrix = (startLines) => {
  const getLine = (min, max) =>{
    const count = parseInt( (((max - min) + 1) * Math.random()) + min ,10)
    let line = [];
    for(let i = 0; i < count; i++ ){
      line.push(1)
    }
    for(let i = 0, len = 10 - count; i < len; i++){
      const index = parseInt( ((line.length + 1) * Math.random()), 10)
      line.splice(index, 0, 0)
    }
    return List(line)
  }

  let startMatrix = List();
  for (let i = 0; i < startLines; i++){
    if(i <= 2 ){
      startMatrix = startMatrix.push(getLine(5, 8))
    } else if( i <= 6){
      startMatrix = startMatrix.push(getLine(4, 9))
    } else {
      startMatrix = startMatrix.push(getLine(3, 9))
    }
  }
  for (let i = 0, len = 20 - startLines; i < len; i++ ){
    startMatrix = startMatrix.unshift(List(blankLine))
  }

  return startMatrix;
}

const states = {
  fallInterval: null,

  start: ()=>{
    const state = store.getState();
    const startMatrix = getStartMatrix(state.startLines)
    store.dispatch(actions.matrix(startMatrix))
    store.dispatch(actions.moveBlock({type: state.next}))
    store.dispatch(actions.nextBlock())
  }
}

export default states