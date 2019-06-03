import * as crypto from 'crypto'
import ReadStream = NodeJS.ReadStream
import WriteStream = NodeJS.WriteStream
import * as fs from 'fs'
const baseAlgorithm = 'AES'

export enum Mode {
  ECB = 'ECB',
  CBC = 'CBC',
  CFB = 'CFB',
  OFB = 'OFB',
}

const getAlgorithm = (mode: Mode = Mode.ECB) =>
  `${baseAlgorithm}-128-${mode}`.toUpperCase()

const decrypt: (
  input: fs.ReadStream,
  output: fs.WriteStream,
  mode: Mode,
  key: Buffer,
  iv: Buffer,
  progress: WriteStream
) => void = (input, output, mode, key, iv, progress) => {
  let decipher

  console.log('Current mode: ', getAlgorithm(mode))
  console.log('Lengths: ', iv.length, key.length)
  if (mode === Mode.ECB) {
    decipher = crypto.createDecipheriv(getAlgorithm(mode), key, '')
  } else {
    decipher = crypto.createDecipheriv(getAlgorithm(mode), key, iv)
  }

  input.pipe(decipher).pipe(progress).pipe(output)
}

export default decrypt
