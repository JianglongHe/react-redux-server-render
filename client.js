import React from 'react'
import { match, Router } from 'react-router'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createHistory } from 'history'
import routes from './src/routes/RootRoute'

const { pathname, search, hash } = window.location
const location = `${pathname}${search}${hash}`

// calling `match` is simply for side effects of
// loading route/component code for the initial location
let rootElement = document.getElementById('app')
match({ routes, location }, () => {
  render(
    <Provider store={store}>
      <Router routes={routes} history={createHistory()} />
    </Provider>,
    rootElement
  )
})
