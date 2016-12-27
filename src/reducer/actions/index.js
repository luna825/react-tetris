import * as reducerType from 'reducer/types'
import getNextType from 'unit'

export function matrix(data){
  return {
    type: reducerType.MATRIX,
    data
  }
}

export function moveBlock(option){
  return {
    type: reducerType.MOVE_BLOCK,
    data: option.reset === true ? null : new Block(option),
  }
}

export function nextBlock(next = getNextType()) {
  return {
    type: reducerType.NEXT_BLOCK,
    data: next,
  };
}