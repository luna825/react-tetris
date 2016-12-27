import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux';
import store from 'reducer/store';
import App from 'containers'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
 document.getElementById('app'))