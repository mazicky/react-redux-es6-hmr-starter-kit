import React, { Component } from 'react'
import { browserHistory } from 'react-router'

class First extends Component {
  render() {
    return (
      <div onClick={this.goTo.bind(this)}>First</div>
    )
  }

  goTo() {
    browserHistory.push('second')
  }
}

export default First
