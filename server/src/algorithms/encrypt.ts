import * as crypto from 'crypto'
import ReadStream = NodeJS.ReadStream;
import WriteStream = NodeJS.WriteStream;

const size = 128
const baseAlgorithm = 'aes'

export enum Mode { ECB = 'ecb', CBC = 'cbc', CFB = 'cfb', OFB = 'ofb' }

const getAlgorithm = (size: number = 128, mode: Mode = Mode.ECB) => `${baseAlgorithm}-${size}-${mode}`

const createKey = (bitLength: number = 128) => {
  const byteLength = bitLength / 8
  const secret = crypto.randomBytes(byteLength)
  const salt = crypto.randomBytes(byteLength)
  return crypto.scryptSync(secret, salt, byteLength)
}

const createIv = (mode: Mode) => {
  return crypto.randomBytes(mode !== Mode.ECB ? 16 : 0)
}

export const encrypt = async (input: ReadStream, output: WriteStream, mode: Mode) => {
  const key = createKey(size)
  const iv = createIv(mode)
  const cipher = crypto.createCipheriv(getAlgorithm(size, mode), key, iv)
  input.pipe(cipher).pipe(output)
}


