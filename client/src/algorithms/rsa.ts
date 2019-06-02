import NodeRSA = require('node-rsa')

interface IKey {
  clientKey: NodeRSA
  publicKey: string
}

let clientKey: NodeRSA | null = null
let publicKey: string | null = null

const getClientKey: () => IKey = () => {
  if (clientKey === null || publicKey === null) {
    clientKey = new NodeRSA({ b: 512 })
    clientKey.generateKeyPair()
    publicKey = clientKey.exportKey('public')
  }
  return { clientKey, publicKey }
}

export default getClientKey
