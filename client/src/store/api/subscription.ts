import * as net from 'net'
import { Store } from 'redux'
import through = require('through2')


const DELIMITER = '\n'

export const subscribeToFiles: (
  callback: (stream: any, metadata: ITransferMeta) => void
) => void = (callback) => {
  const server = net.createServer(socket => {
    const buffer = {
      meta: '',
      stream: through(),
    }

    let fileDescription: ITransferMeta | null = null

    socket.on('data', data => {
      const dataString = data.toString()
      console.log('Jest transfer')  
      if (fileDescription) {
        buffer.stream.write(data)
      } else if (dataString.includes(DELIMITER)) {
        const [endOfData, startOfFile] = dataString.split(DELIMITER)

        fileDescription = JSON.parse((buffer.meta += endOfData))
       
        if (fileDescription !== null) {
          console.log('Metadata json: ', fileDescription)
          callback(buffer.stream, fileDescription)
        }

        buffer.stream.write(startOfFile)
      } else {
        buffer.meta += dataString
      }
    })
  })
  console.log('Stworzono serwer')
  server.listen(4849)
}
