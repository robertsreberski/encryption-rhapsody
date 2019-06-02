import { applyMiddleware, compose, createStore, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import appReducer from './reducers'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const mockState: AppState = {
  files: [
    {
      id: 1,
      name: 'Test file',
      size: 300,
    },
    {
      id: 2,
      name: 'Test file2',
      size: 301,
    },
  ],
}

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
