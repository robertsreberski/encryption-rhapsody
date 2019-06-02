import { ACTION_FILE, FileActions } from '../reducer/actions/file'
import { takeEvery, put, call, take, fork } from '@redux-saga/core/effects'
import uuidv4 = require('uuid/v4')
import progress = require('progress-stream')
import commitFile = FileActions.commitFile
import * as fs from 'fs'
import { DIST_FOLDER, encrypt, Mode } from '../../algorithms/encrypt'
import { eventChannel, END } from '@redux-saga/core'

function* assertDistFolder(folderName: string) {
  const distExists = yield call(fs.existsSync, folderName)
  if (!distExists) {
    yield call(fs.mkdirSync, folderName)
  }
}

function* encryptFile({
  payload: { path, filename, mode },
}: ReturnType<typeof FileActions.requestEncryptFile>) {
  const id = uuidv4()

  yield put(
    commitFile({
      id: id,
      name: filename,
      mode: mode,
    })
  )

  yield call(assertDistFolder, DIST_FOLDER)

  const stats = yield call(fs.statSync, path)
  const progressStream = yield call(progress, { length: stats.size, time: 500 })
  const inputStream = yield call(fs.createReadStream, path)
  const outputStream = yield call(fs.createWriteStream, `${DIST_FOLDER}/${filename}`)

  const channel = eventChannel(emitter => {
    console.log('emitter started')
    progressStream.on('progress', (data: { percentage: number }) => emitter(data.percentage))
    outputStream.on('close', () => {
      emitter(END)
    })
    return () => {
      console.log('emitter finished')
    }
  })

  const { key, iv } = yield call(encrypt, inputStream, outputStream, mode as Mode, progressStream)

  try {
    while (true) {
      const progress = yield take(channel)

      yield put(commitFile({ id, progress }))
    }
  } finally {
    yield put(
      commitFile({
        id,
        progress: 100,
        iv: iv,
        sessionKey: key,
      })
    )
  }
}

const fileSagas = [takeEvery(ACTION_FILE.REQUEST.ENCRYPT, encryptFile)]

export default fileSagas
