import * as net from 'net'

export namespace TransferApi {
  import ReadStream = NodeJS.ReadStream
  export const sendFile: (
    client: IClient,
    data: { stream: { data: ReadStream; size: number }; encryptedKey: string; _file: IFile }
  ) => void = (client, data) => {
    const socket = net.connect(client.port, client.ip, () => {
      const meta: ITransferMeta = {
        mode: data._file.mode!,
        key: data.encryptedKey,
        iv: data._file.iv!,
        fileMetadata: {
          name: data._file.name!,
          size: data.stream.size,
        },
      }

      const json = JSON.stringify(meta)
      socket.write(json + '\n', () => {
        data.stream.data.pipe(socket)
      })
    })
  }
}
