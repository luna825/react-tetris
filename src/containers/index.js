import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {List} from 'immutable'
import style from './index.scss';

import {Matrix, Next} from 'components'


class App extends Component {

  render(){
    const {matrix, cur, next} = this.props;
    return(
      <div className={style.app}>
        <div className={style.screen}>
          <div className={style.panel}>
            <Matrix matrix={matrix} cur={cur}/>
            <div className={style.state}>
              <p>下一个:</p>
              <Next next={next} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}


App.propTypes = {
  matrix: PropTypes.instanceOf(List).isRequired,
  cur: PropTypes.object,
  next:PropTypes.string.isRequired,
}

const mapStateToProps = (state)=>({
  matrix: state.matrix,
  cur: state.cur,
  next: state.next
})


export default connect(mapStateToProps)(App)
