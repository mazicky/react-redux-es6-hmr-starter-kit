import * as transitionActions from '../actions/transition'
import { browserHistory } from 'react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import React, { Component } from 'react'

class Second extends Component {
  componentWillReceiveProps(nextProps) {
    browserHistory.push(nextProps.transition)
  }

  render() {
    return (
      <div onClick={this.goTo.bind(this)}>Second</div>
    )
  }

  goTo() {
    this.props.transitionTo('first')
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

export default connect(mapStateToProps, mapDispatchToProps)(Second)
