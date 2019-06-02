import * as crypto from 'crypto'
import ReadStream = NodeJS.ReadStream
import WriteStream = NodeJS.WriteStream

const size = 128
const baseAlgorithm = 'aes'

export enum Mode {
  ECB = 'ECB',
  CBC = 'CBC',
  CFB = 'CFB',
  OFB = 'OFB',
}

const getAlgorithm = (size: number = 128, mode: Mode = Mode.ECB) =>
  `${baseAlgorithm}-${size}-${mode}`

const createKey = (bitLength: number = 128) => {
  const byteLength = bitLength / 8
  const secret = crypto.randomBytes(byteLength)
  const salt = crypto.randomBytes(byteLength)
  return crypto.scryptSync(secret, salt, byteLength)
}

const createIv = (mode: Mode) => {
  return crypto.randomBytes(mode !== Mode.ECB ? 16 : 0)
}

export const DIST_FOLDER = './encrypted'

export const encrypt: (
  input: ReadStream,
  output: WriteStream,
  mode: Mode,
  progress?: WriteStream
) => { key: string; iv: string } = (input, output, mode, progress) => {
  const key = createKey(size)
  const iv = createIv(mode)
  const cipher = crypto.createCipheriv(getAlgorithm(size, mode), key, iv)

  const piped: ReadStream = (progress ? input.pipe(progress!) : input) as ReadStream
  piped.pipe(cipher).pipe(output)

  return {
    key: key.toString('utf-8'),
    iv: iv.toString('utf-8'),
  }
}
