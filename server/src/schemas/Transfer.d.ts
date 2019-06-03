interface ITransfer {
  id: string
  client?: string | IClient
  file?: string | IFile
  startedAt?: Date
  finishedAt?: Date

  progress?: number
}

interface ITransferMeta {
  mode: string
  key: string
  iv: string
  fileMetadata: {
    name: string
    size: number
  }
}

interface ITransferState {
  [id: string]: ITransfer
}
