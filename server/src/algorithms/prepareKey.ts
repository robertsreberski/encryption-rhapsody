import NodeRSA = require('node-rsa')

export const prepareKey: (publicKey: string, encryptionKey: string) => string = (
  publicKey,
  encryptionKey
) => {
  const encryptor = new NodeRSA({ b: 512 })
  encryptor.importKey(publicKey, 'public')
  const buff = Buffer.from(encryptionKey, 'hex')
  console.log(buff)
  return encryptor.encrypt(buff).toString('hex')
}
