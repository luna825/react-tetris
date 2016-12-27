import React, {Component, PropTypes} from 'react'
import { List } from 'immutable'
import classnames from 'classnames'

import style from './Matrix.scss'


export default class Matrix extends Component {

  constructor(props){
    super(props)
  }
  static propTypes = {
    matrix: PropTypes.instanceOf(List).isRequired
  }

  getResult(){


    return this.props.matrix
  }

  render(){
    let {matrix} = this.props;
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