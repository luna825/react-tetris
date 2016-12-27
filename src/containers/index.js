import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {List} from 'immutable'
import style from './index.scss';
import {Matrix} from 'components'


class App extends Component {

  render(){
    const {matrix} = this.props;
    return(
      <div className={style.app}>
        <div className={style.screen}>
          <div className={style.panel}>
            <Matrix matrix={matrix} />
          </div>
        </div>
      </div>
    )
  }
}


App.propTypes = {
  matrix: PropTypes.instanceOf(List).isRequired
}

const mapStateToProps = (state)=>({
  matrix: state.matrix
})


export default connect(mapStateToProps)(App)
