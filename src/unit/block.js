import { fromJS, List } from 'immutable'
import { blockShape, origin } from './const'

export default class Block {
  constructor(option){
    this.type = option.type;

    if (!option.rotateIndex){
      this.rotateIndex = 0
    }else{
      this.rotateIndex = option.rotateIndex
    }
    if (!option.timeStamp){
      this.timeStamp = Date.now()
    }else{
      this.timeStamp = option.timeStamp;
    }
    if(!option.shape){
      this.shape = fromJS(blockShape[option.type])
    }else{
      this.shape = option.shape
    }
    if(!option.xy){
      switch(option.type){
        case 'I':
          this.xy = List([0, 3]);
        default:
          this.xy = List([-1, 4])
      }
    }else{
      this.xy = List(option.xy)
    }
  }

  rotate(){
    const shape = this.shape;
    let result = List();
    shape.forEach(m => m.forEach((n, k)=>{
      const index = m.size - k - 1;
      if ( result.get(index) === undefined ){
        result = result.set(index, List([]));
      }
      const tempK = result.get(index).push(n);
      result = result.set(index, tempK)
    }));
    const nextXY = [
      this.xy.get(0) + origin[this.type][this.rotateIndex][0],
      this.xy.get(1) + origin[this.type][this.rotateIndex][1]
    ];
    const nextRotateIndex = this.rotateIndex + 1 >= origin[this.type].length ? 
      0 : this.rotateIndex + 1
    return {
      type: this.type,
      shape: result,
      xy: nextXY,
      rotateIndex: nextRotateIndex,
      timeStamp: this.timeStamp
    }
  }

  fall(n=1){
    return {
      type: this.type,
      shape: this.shape,
      xy: [this.xy.get(0) + n, this.xy.get(1)],
      rotateIndex: this.rotateIndex,
      timeStamp: this.timeStamp
    }
  }
  right() {
    return {
      shape: this.shape,
      type: this.type,
      xy: [this.xy.get(0), this.xy.get(1) + 1],
      rotateIndex: this.rotateIndex,
      timeStamp: this.timeStamp,
    };
  }
  left() {
    return {
      shape: this.shape,
      type: this.type,
      xy: [this.xy.get(0), this.xy.get(1) - 1],
      rotateIndex: this.rotateIndex,
      timeStamp: this.timeStamp,
    };
  }
}