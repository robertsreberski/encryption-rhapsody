import * as React from 'react'
import { Table, Row, Cell } from './styles'

interface Props {
  files: IFile[]
}

const FileTable: React.FC<Props> = ({ files }) => (
  <Table>
    <Row>
      <th> ID </th>
      <th> Filename </th>
      <th> Size </th>
      <th> Progress </th>
    </Row>
    {files.map(file => (
      <Row>
        <Cell>{file.id}</Cell>
        <Cell>{file.name}</Cell>
        <Cell>{file.size}</Cell>
        <Cell>{file.progress}</Cell>
      </Row>
    ))}
  </Table>
)

export default FileTable
