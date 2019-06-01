import { Reducer } from 'redux'

const ClientReducer: Reducer<IClientState, IAction<IClient>> = (state = {}, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default ClientReducer
