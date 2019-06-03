import * as net from 'net'
import getClientKey from '../../algorithms/rsa'

export const sendPubKey = () => {
  const client = net.connect({ port: 5000, host: 'localhost', localPort: 4848}, () => {
    const pubKey = getClientKey().publicKey
    console.log("Ten klucz wysylam", pubKey)
    client.write(pubKey)
  })
}
