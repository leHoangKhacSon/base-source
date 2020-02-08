import * as React from 'react'
import * as ReactDOM from 'react-dom'

import './styles.scss'
import { Hello } from './Hello'

ReactDOM.render(
  <Hello compiler="Typescript" framework="React" />,
  document.getElementById('root')
)