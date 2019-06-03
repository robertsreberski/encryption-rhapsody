import { combineReducers } from 'redux'
import FileReducer from './FileReducer'

const appReducer = combineReducers({files: FileReducer})

export default appReducer