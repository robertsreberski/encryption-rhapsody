import { combineReducers } from 'redux'
import ClientReducer from './reducers/ClientReducer'
import FileReducer from './reducers/FileReducer'
import TransferReducer from './reducers/TransferReducer'

const appReducer = combineReducers({
  Client: ClientReducer,
  File: FileReducer,
  Transfer: TransferReducer,
})

export default appReducer
