import { subscribeToFiles } from './subscription'
import { Store } from 'redux'
import { FileAction } from '../../store/reducers/FileActions'
import uuid4 = require('uuid/v4')
import getClientKey from '../../algorithms/rsa'
import * as fs from 'fs'
import progress = require('progress-stream')
import decrypt, { Mode } from '../../algorithms/decrypt'
import NodeRSA = require('node-rsa')



export const startServer = (store: Store) => {
  subscribeToFiles((input, meta) => {
    const {
      mode,
      key,
      iv,
      fileMetadata: { name, size },
    } = meta
    
    console.log('W callbacku')  
    store.dispatch(FileAction.commitFileStart({ id: uuid4(), name, size, progress: 0 }))
    
    console.log('Klucz:', key)
    //console.log(key.toString())
    const keyBuff = Buffer.from(key, 'hex')
    const decrypted = getClientKey().clientKey.decrypt(keyBuff)
    
    console.log('Pub key', getClientKey().publicKey)
    console.log('Decrypted key:', decrypted)
    const output = fs.createWriteStream(`./decrypted/${name}`)
    const progStream = progress({ length: size, time: 500 })

    progStream.on('progress', ({ percentage }) => {
      store.dispatch(
        FileAction.commitFileProgress({ id: uuid4(), name, size, progress: percentage })
      )
    })

    output.on('close', () => {
      store.dispatch(FileAction.commitFileFinished({ id: uuid4(), name, size, progress: 100 }))
    })

    decrypt(input, output, mode as Mode, decrypted, iv, progStream)
  })
}


