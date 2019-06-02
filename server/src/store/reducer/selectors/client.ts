import { createSelector } from 'reselect'

const getClientState: (state: AppState) => IClientState = state => state.Client

export const GetAllClients = createSelector(
  getClientState,
  clients => {
    return Object.values(clients)
  }
)
