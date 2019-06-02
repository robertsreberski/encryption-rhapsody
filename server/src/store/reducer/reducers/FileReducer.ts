import { Reducer } from 'redux'
import { ACTION_FILE } from '../actions/file'

const FileReducer: Reducer<IFileState, IAction<IFile>> = (state = {}, action) => {
  switch (action.type) {
    case ACTION_FILE.COMMIT: {
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          ...action.payload,
        },
      }
    }
    default:
      return state
  }
}

export default FileReducer
