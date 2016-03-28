import * as actionTypes from '../actions/transition'

function transition(state='', action) {
  switch (action.type) {
    case actionTypes.TRANSITION_TO:
      return action.route
    default:
      return state
  }
}

export default transition
