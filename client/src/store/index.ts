import { applyMiddleware, compose, createStore, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import appReducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const initStore: (initialState?: AppState) => { store: Store<AppState> } = (
  state = {} as AppState
) => {
  const store = createStore(
    appReducer,
    state,
    compose(
      process.env.__ENV__ === 'dev'
        ? applyMiddleware(sagaMiddleware, logger)
        : applyMiddleware(sagaMiddleware)
    )
  )

  sagaMiddleware.run(rootSaga)

  return { store }
}

export default initStore