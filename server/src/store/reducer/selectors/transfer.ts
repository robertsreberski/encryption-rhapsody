import { createSelector } from 'reselect'

const getTransferState: (state: AppState) => ITransferState = state => state.Transfer
const getClientState: (state: AppState) => IClientState = state => state.Client
const getFileState: (state: AppState) => IFileState = state => state.File

export const GetAllTransfers = createSelector(
  getTransferState,
  getClientState,
  getFileState,
  (transfers, clients, files) => {
    return Object.values(transfers).map(transfer => ({
      ...transfer,
      client: clients[transfer.client as string],
      file: files[transfer.file as string],
    }))
  }
)
