import React, { Component } from 'react'
import { browserHistory } from 'react-router'

class Second extends Component {
  render() {
    return (
      <div onClick={this.goTo.bind(this)}>Second</div>
    )
  }

  goTo() {
    browserHistory.push('first')
  }
}

export default Second
