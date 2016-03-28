import * as transitionActions from '../actions/transition'
import { browserHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { Component } from 'react'

class First extends Component {
  componentWillReceiveProps(nextProps) {
    browserHistory.push(nextProps.transition)
  }

  render() {
    return (
      <div onClick={this.goTo.bind(this)}>First</div>
    )
  }

  goTo() {
    this.props.transitionTo('second')
  }
}

function mapStateToProps(state) {
  return {
    transition: state.transition
  }
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(transitionActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(First)
