import NodeRSA = require('node-rsa')

interface IKey {
  clientKey: NodeRSA
  publicKey: string
  privateKey: string
}

let clientKey: NodeRSA | null = null
let publicKey: string | null = null
let privateKey: string | null = null

const getClientKey: () => IKey = () => {
  if (clientKey === null || publicKey === null || privateKey === null) {
    clientKey = new NodeRSA({ b: 512 })
    clientKey.generateKeyPair()
    publicKey = clientKey.exportKey('public')
    privateKey = clientKey.exportKey('private')
  }
  return { clientKey, publicKey, privateKey }
}

export default getClientKey
