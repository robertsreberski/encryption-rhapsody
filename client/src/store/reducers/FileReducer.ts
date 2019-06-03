import { Reducer } from 'redux'
import { ACTION_FILE } from './FileActions'

const FileReducer = (state = {}, action: Action<IFile>) => {
  switch (action.type) {
    case ACTION_FILE.COMMIT.FILE_START: {
      return {
        ...state,
        [action.payload.id]: {
          ...action.payload,
        },
      }
    }
    case ACTION_FILE.COMMIT.FILE_PROGRESS: {
      return {
        ...state,
        [action.payload.id]: {
          ...action.payload,
        },
      }
    }
    case ACTION_FILE.COMMIT.FILE_FINISHED: {
      return {
        ...state,
        [action.payload.id]: {
          ...action.payload,
        },
      }
    }
    default: {
      return state
    }
  }
}

export default FileReducer
