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

const getAlgorithm = (size: number = 128, mode: Mode = Mode.ECB) =>
  `${baseAlgorithm}-${size}-${mode}`

const decrypt: (
  input: fs.ReadStream,
  output: fs.WriteStream,
  mode: Mode,
  size: number,
  key: Buffer,
  iv: Buffer,
  progress?: WriteStream
) => void = (input, output, mode, size, key, iv, progress) => {
  let decipher
  if (mode === Mode.ECB) {
    decipher = crypto.createDecipheriv(getAlgorithm(size, mode), key, '')
  } else {
    decipher = crypto.createDecipheriv(getAlgorithm(size, mode), key, iv)
  }

  input.pipe(decipher).pipe(output)
}

export default decrypt
