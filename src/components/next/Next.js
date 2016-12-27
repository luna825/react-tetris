import React, {Component, PropTypes} from 'react'
import style from './next.scss';

import {blockShape} from 'unit/const'

//提示下一个方块的矩阵
const empty =[
  [0, 0, 0, 0],
  [0, 0, 0, 0]
]

//方块在矩阵中的位置坐标
const xy = {
  'I': [1, 0],
  'J': [0, 0],
  'Z': [0, 0],
  'S': [0, 0],
  'T': [0, 0],
  'O': [0, 1],
  'L': [0, 0]
}


export default class Next extends Component {
  constructor(props){
    super(props)
    this.state = {
      block: empty
    }
  }

  static propTypes ={
    next: PropTypes.string
  }

  componentWillMount() {
    this.build(this.props.next)
  }

  componentWillReceiveProps(nextProps) {
    this.build(nextProps.next)
  }

  shouldComponentUpdate(nextProps) {
    return this.props.next !== nextProps.next
  }

  build(type){
    const shape = blockShape[type]
    const block = empty.map(e=>([...e]));
    shape.forEach((m, k1)=>{
      m.forEach((n, k2)=>{
        if (n){
          block[k1 + xy[type][0]][k2 + xy[type][1]] = 1;
        }
      })
    }) 
    this.setState({block})
  }

  render(){
    return(
      <div className={style.next}>
        {this.state.block.map((arr, k1)=>(
          <div key={k1}>
            {arr.map((e, k2)=>(
              <b className={e ? 'c' : ''}  key={k2}/>
            ))}
          </div>
        ))}
      </div>
    )
  }
}