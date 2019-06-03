import { applyMiddleware, compose, createStore, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'
import appReducer from './reducers'
import { startServer } from './api'


const sagaMiddleware = createSagaMiddleware()

const mockState: AppState = {
  files: {
    1: {
      id: '1',
      name: 'Test file',
      size: 300,
      progress: 0,
    },
    2: {
      id: '2',
      name: 'Test file2',
      size: 301,
      progress: 0,
    },
    3: {
      id: '2',
      name: 'Test file3',
      size: 301,
      progress: 0,
    },
  },
}

//@ts-ignore
const initStore: (initialState?: AppState) => { store: Store<AppState> } = (
  initialState = mockState
) => {
  const store = createStore(
    appReducer,
    initialState,
    compose(
      process.env.__ENV__ === 'dev'
        ? applyMiddleware(sagaMiddleware, logger)
        : applyMiddleware(sagaMiddleware)
    )
  )
  
  startServer(store)

  return { store }
}

export default initStore
