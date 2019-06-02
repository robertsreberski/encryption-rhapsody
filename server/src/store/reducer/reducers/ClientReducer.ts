import { Reducer } from 'redux'
import { ACTION_CLIENT } from '../actions/client'

const ClientReducer: Reducer<IClientState, IAction<IClient>> = (state = {}, action) => {
  switch (action.type) {
    case ACTION_CLIENT.COMMIT: {
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

export default ClientReducer
