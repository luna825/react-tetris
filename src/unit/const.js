import {List} from 'immutable'
const blockShape = {
  'I' : [
    [1, 1, 1, 1]
  ],
  'L' : [
    [0, 0, 1],
    [1, 1, 1]
  ],
  'J' : [
    [1, 0, 0],
    [1, 1, 1]
  ],
  'Z' : [
    [1, 1, 0],
    [0, 1, 1]
  ],
  'S' : [
    [0, 1, 1],
    [1, 1, 0]
  ],
  'O': [
    [1, 1],
    [1, 1]
  ],
  'T': [
    [0, 1, 0],
    [1, 1, 1]
  ]
}

const origin = {
  'I': [[-1, 1], [1, -1]],
  'L': [[0, 0]],
  'J': [[0, 0]],
  'Z': [[0, 0]],
  'S': [[0, 0]],
  'O': [[0, 0]],
  'T': [[0, 0], [1, 0], [-1, 1], [0, -1]]
}
const blockTypes = Object.keys(blockShape);

const StorageKey = 'REACT_TETRIS';

const blankLine = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
const fillLine = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

const blankMatrix = (()=>{
  let matrix = []
  for (let i = 0; i < 20; i++){
    matrix.push(blankLine)
  }
  return List(matrix)
})();


export { blockShape, origin, blankMatrix, StorageKey, blockTypes, blankLine}