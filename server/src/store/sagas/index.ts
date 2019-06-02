import { all } from '@redux-saga/core/effects'
import fileSagas from './file'
import transferSagas from './transfer'

export default function* rootSaga() {
  yield all([...fileSagas, ...transferSagas])
}
