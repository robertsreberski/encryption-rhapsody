import * as net from 'net'
import { Store } from 'redux'
import through = require('through2')
import { callbackify } from 'util'

const DELIMITER = '\n'

export const subscribeToFiles: (
  callback: (stream: any, metadata: ITransferMeta) => void,
  store: Store
) => void = (callback, store) => {
  const server = net.createServer(socket => {
    const buffer = {
      meta: '',
      stream: through(),
    }

    let fileDescription: ITransferMeta | null = null

    socket.on('data', data => {
      const dataString = data.toString()

      if (fileDescription) {
        buffer.stream.write(data)
      } else if (dataString.includes(DELIMITER)) {
        const [endOfData, startOfFile] = dataString.split(DELIMITER)

        fileDescription = JSON.parse((buffer.meta += endOfData))
        if (fileDescription !== null) {
          callback(buffer.stream, fileDescription)
        }

        buffer.stream.write(startOfFile)
      } else {
        buffer.meta += dataString
      }
    })
  })

  server.listen(4848)
}
