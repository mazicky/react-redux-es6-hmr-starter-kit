import configureStore from '../store/configureStore'
import { First, Second } from '../components'
import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'

class Root extends Component {
  render() {
    return(
      <Provider store={configureStore()}>
        <Router history={browserHistory}>
          <Route path="/" component={First} />
          <Route path="first" component={First} />
          <Route path="second" component={Second} />
        </Router>
      </Provider>
    )
  }
}

export default Root
