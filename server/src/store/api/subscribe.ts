import * as net from 'net'
import { Store } from 'redux'
import { ClientActions } from '../reducer/actions/client'
import commitClient = ClientActions.commitClient

export const subscribeToClients = (store: Store) => {
  const server = net.createServer(socket => {
    const id = `${socket.remoteAddress}-${socket.remotePort}`
    socket.on('data', publicKey => {
      store.dispatch(
        commitClient({
          id,
          ip: socket.remoteAddress!,
          port: socket.remotePort!,
          publicKey: publicKey.toString(),
        })
      )
      socket.end(publicKey)
    })
    socket.on('end', () => {
      console.log('client disconnected')
    })
  })

  server.on('error', err => console.log(err))
  server.listen(5000, () => {
    console.log('Server started on port=5000')
  })
}
