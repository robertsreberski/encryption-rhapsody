import { all } from '@redux-saga/core/effects'
import fileSagas from './file'

export default function* rootSaga() {
  yield all([...fileSagas])
}
