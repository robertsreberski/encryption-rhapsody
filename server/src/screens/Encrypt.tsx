import * as React from 'react'
import { connect } from 'react-redux'
import Table from '../components/Table'
import AddFileBar from '../components/AddFileBar/AddFileBar'
import { Mode } from '../algorithms/encrypt'
import { Dispatch } from 'redux'
import { GetAllFiles } from '../store/reducer/selectors/file'
import { FileActions } from '../store/reducer/actions/file'

type StateProps = {
  files: [string, string, string, string][]
}
type DispatchProps = {
  onAdd: (data: { path: string; filename: string; mode: Mode }) => void
}
type OwnProps = {}

const mapStateToProps: (state: AppState) => StateProps = state => ({
  files: GetAllFiles(state).map(file => [
    file.id,
    file.name || '',
    file.mode! || Mode.ECB,
    `${(file.progress || 0).toFixed(2)}%`,
  ]),
})
const mapDispatchToProps: (dispatch: Dispatch) => DispatchProps = dispatch => ({
  onAdd: data => {
    dispatch(FileActions.requestEncryptFile(data))
  },
})

type Props = StateProps & DispatchProps & OwnProps

const EncryptScreen: React.FC<Props> = ({ files, onAdd }) => {
  return (
    <>
      <AddFileBar onAdd={onAdd} />
      <Table
        headers={['ID', 'Name', 'Mode', 'Progress']}
        centered={[false, false, true, true]}
        data={files}
      />
    </>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EncryptScreen)
