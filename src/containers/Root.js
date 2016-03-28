import React, { Component } from 'react'
import { First, Second } from './'
import { Router, Route, browserHistory } from 'react-router'

class Root extends Component {
  render() {
    return(
      <Router history={browserHistory}>
        <Route path="first" component={First} />
        <Route path="second" component={Second} />
      </Router>
    )
  }
}

export default Root
