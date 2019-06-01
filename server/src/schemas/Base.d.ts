interface IAction<T> {
  type: string
  payload: T
}

interface AppState {
  Client: IClientState
  File: IFileState
  Transfer: ITransferState
}
