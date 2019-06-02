import * as React from 'react'
import { connect } from 'react-redux'
import FileTable from '../../components/FileTable'
import { Container, GlobalStyles } from './styles'

const mapStateToProps = () => {}
const mapDispatchToProps = () => {}

interface Props {
    files: IFile[]
}

const FileTransfer: React.FC<> = () => (
  <Container>
    <GlobalStyles />
    <h1>File transfer screen</h1>
    <FileTable />
  </Container>
)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FileTransfer)
