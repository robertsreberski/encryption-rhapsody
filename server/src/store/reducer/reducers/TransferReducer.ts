import { Reducer } from 'redux'
import { ACTION_TRANSFER } from '../actions/transfer'

const TransferReducer: Reducer<ITransferState, IAction<ITransfer>> = (state = {}, action) => {
  switch (action.type) {
    case ACTION_TRANSFER.COMMIT: {
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

export default TransferReducer
