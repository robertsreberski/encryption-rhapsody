import { applyMiddleware, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import appReducer from './reducer'
import logger from 'redux-logger'
import rootSagas from './sagas'
import initServerApi from './api'

const sagaMiddleware = createSagaMiddleware()

const initStore: (
  state?: AppState
) => {
  store: ReturnType<typeof createStore>
} = (state = {} as AppState) => {
  const store = createStore(
    appReducer,
    state,
    compose(
      process.env.__ENV__ === 'dev'
        ? applyMiddleware(sagaMiddleware, logger)
        : applyMiddleware(sagaMiddleware)
    )
  )

  sagaMiddleware.run(rootSagas)
  initServerApi(store)

  return { store }
}

export default initStore
