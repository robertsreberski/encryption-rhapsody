interface ITransfer {
  id: string
  client: string | IClient
  file: string | IFile
  startedAt: Date
  finishedAt?: Date

  progress: number
}

interface ITransferState {
  [id: string]: ITransfer
}
