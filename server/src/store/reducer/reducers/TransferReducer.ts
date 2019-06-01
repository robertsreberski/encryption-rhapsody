import { Reducer } from 'redux'

const TransferReducer: Reducer<IClientState, IAction<IClient>> = (state = {}, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default TransferReducer
