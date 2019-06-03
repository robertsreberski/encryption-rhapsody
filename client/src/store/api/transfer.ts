import * as net from 'net'
import getClientKey from '../../algorithms/rsa'

export const sendPubKey = () => {
  const client = net.connect(5000, 'localhost', () => {
    const pubKey = getClientKey().publicKey
    client.write(pubKey)
  })
}
