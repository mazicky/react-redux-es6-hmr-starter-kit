//https://babeljs.io/docs/usage/polyfill/
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import Root from './containers/Root'

render(
  <div><Root /></div>,
  document.getElementById('root')
)
