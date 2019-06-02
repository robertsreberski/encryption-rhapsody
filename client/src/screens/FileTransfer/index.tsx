import * as React from 'react'
import FileTable from '../../components/FileTable'
import { Container, GlobalStyles } from './styles'

interface IProps {}

const FileTransfer: React.FC = () => (
  <Container>
    <GlobalStyles/>
    <h1>File transfer screen</h1>
    <FileTable/>
  </Container>
)

export default FileTransfer
