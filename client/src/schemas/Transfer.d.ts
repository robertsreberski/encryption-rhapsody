interface ITransferMeta {
  mode: string
  key: string
  iv: string
  fileMetadata: {
    name: string
    size: number
  }
}

interface OutgoingTransfer {
    publicKey: string
}

interface IServer {
    host: string
    port: number
}
