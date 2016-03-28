export const TRANSITION_TO = 'TRANSITION_TO'

export function transitionTo(route) {
  return {
    type: TRANSITION_TO,
    route
  }
}
