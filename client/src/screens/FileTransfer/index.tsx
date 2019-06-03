import * as React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import FileTable from '../../components/FileTable'
import { Container } from './styles'
import { GetAllFiles } from '../../store/reducers/FileSelectors'
import { FileAction } from '../../store/reducers/FileActions'
import { sendPubKey } from '../../store/api/transfer'

type StateProps = {
  files: IFile[]
}

type DispatchProps = { onStart: (data: IFile) => void }

type Props = StateProps & DispatchProps

const mapStateToProps = (state: AppState) => ({
  files: GetAllFiles(state),
})

const mapDispatchToProps: (dispatch: Dispatch) => DispatchProps = dispatch => ({
  onStart: data => {
    dispatch(FileAction.commitFileStart(data))
  },
})

const FileTransfer: React.FC<Props> = ({ files, onStart }) => {
    React.useEffect(() => {
        sendPubKey()
  },[])

  return (
    <Container>
      <FileTable files={files} />
    </Container>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileTransfer)
