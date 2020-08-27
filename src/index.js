import React from 'react'
import ReactDOM from 'react-dom'
import {applyMiddleware, createStore} from 'redux'
import {createBrowserHistory} from 'history'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {routerMiddleware, ConnectedRouter} from 'connected-react-router'
import {Provider} from 'react-redux'
import 'normalize.css'
import createRootReducer from '@/redux/reducers/index'
import {routes} from '@/routes/routes'
import './scss/index.scss'
import './scss/media.scss'

const history = createBrowserHistory()
const middlewares = [thunk, routerMiddleware(history)]
const store = createStore(
  createRootReducer(history),
  composeWithDevTools(applyMiddleware(...middlewares))
)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      {routes}
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
)

