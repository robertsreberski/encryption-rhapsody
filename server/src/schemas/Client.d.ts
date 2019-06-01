interface IClient {
  id: string
  name: string
  publicKey: string
}

interface IClientState {
  [id: string]: IClient
}
