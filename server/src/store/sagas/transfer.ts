import { ACTION_TRANSFER, TransferActions } from '../reducer/actions/transfer'
import { takeEvery, call, take, put } from '@redux-saga/core/effects'
import { prepareKey } from '../../algorithms/prepareKey'
import { DIST_FOLDER } from '../../algorithms/encrypt'
import * as fs from 'fs'
import uuidv4 = require('uuid/v4')
import progressStream = require('progress-stream')
import ReadStream = NodeJS.ReadStream
import { eventChannel } from '@redux-saga/core'
import { TransferApi } from '../api/transfer'
import commitTransfer = TransferActions.commitTransfer

function* transferFile({
  payload: { client, file },
}: ReturnType<typeof TransferActions.requestStartTransfer>) {
  const id = uuidv4()
  const path = `${DIST_FOLDER}/${file.name}`
  const encryptedKey = yield prepareKey(client.publicKey, file.sessionKey!)

  yield put(
    commitTransfer({
      id,
      client: client.id,
      file: file.id,
      startedAt: new Date(),
    })
  )

  const stats = yield call(fs.statSync, path)
  const progress: ReadStream = yield call(progressStream, { length: stats.size, time: 500 })
  const input: ReadStream = yield call(fs.createReadStream, path)

  const channel = eventChannel(emitter => {
    console.log('emitter started')
    progress.on('progress', (data: { percentage: number }) => emitter(data.percentage))
    return () => {
      console.log('emitter finished')
    }
  })

  yield call(TransferApi.sendFile, client, {
    stream: { data: input.pipe(progress), size: stats.size },
    encryptedKey: encryptedKey,
    _file: file,
  })

  try {
    while (true) {
      const progress = yield take(channel)
      yield put(commitTransfer({ id, progress }))
    }
  } finally {
    yield put(
      commitTransfer({
        id,
        progress: 100,
        finishedAt: new Date(),
      })
    )
  }
}

const transferSagas = [takeEvery(ACTION_TRANSFER.REQUEST.START, transferFile)]

export default transferSagas
