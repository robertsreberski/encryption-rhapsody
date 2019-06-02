interface IncomingTransfer {
  mode: string
  key: Buffer
  iv: Buffer
  fileMetadata: {
    name: string
    size: number
  }
}

interface OutgoingTransfer {
    publicKey: string
}