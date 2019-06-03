import NodeRSA = require('node-rsa')

export const prepareKey: (publicKey: string, encryptionKey: string) => string = (
  publicKey,
  encryptionKey
) => {
  const encryptor = new NodeRSA({ b: 512 })
  encryptor.importKey(publicKey, 'public')

  return encryptor.encrypt(encryptionKey, 'hex')
}
