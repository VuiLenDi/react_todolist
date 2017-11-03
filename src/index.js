import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import todoApp from './components/reducers'
import App from './components/App'

import Saga from './saga/sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

let store = createStore(todoApp, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(Saga)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)