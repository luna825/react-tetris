import React, {Component, PropTypes} from 'react'
import { List } from 'immutable'
import classnames from 'classnames'

import style from './Matrix.scss'


export default class Matrix extends Component {

  constructor(props){
    super(props);
    this.state = {
      clearLines: false,
      isOver: false,
    }
  }
  static propTypes = {
    matrix: PropTypes.instanceOf(List).isRequired
  }

  getResult(props=this.props){
    const cur = props.cur;
    const shape = cur && cur.shape;
    const xy = cur && cur.xy

    let matrix = props.matrix;
    const clearLines = this.state.clearLines
    if (clearLines){

    }else if (shape){
      shape.forEach((m, k1)=>{
        m.forEach((n, k2)=>{
          if(n && xy.get(0) + k1 >= 0){
            let line = matrix.get(xy.get(0) + k1 );
            let color;
            if (line.get(xy.get(1) + k2) === 1 && !clearLines){
              color = 2
            }else {
              color = 1
            }
            line = line.set(xy.get(1) + k2, color);
            matrix = matrix.set(xy.get(0) + k1, line)
          }
        })
      })
    }

    return matrix
  }

  render(){
    let matrix = this.getResult()
    return(
      <div className={style.matrix}>
        {matrix.map((p, k1)=>(
          <p key={k1}>
            {p.map((e, k2)=>
              <b key={k2} className={classnames({c: e===1, d: e===2})} />
            )}
          </p>
        ))}
      </div>
    )
  }
}