interface IClient {
  id: string
  ip: string
  port: number
  publicKey: string
}

interface IClientState {
  [id: string]: IClient
}
