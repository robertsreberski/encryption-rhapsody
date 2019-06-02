import NodeRSA = require('node-rsa')

export const prepareKey: (publicKey: string, encryptionKey: Buffer) => Buffer = (
  publicKey,
  encryptionKey
) => {
  const encryptor = new NodeRSA({ b: 512 })
  encryptor.importKey(publicKey, 'public')

  return encryptor.encrypt(encryptionKey)
}
