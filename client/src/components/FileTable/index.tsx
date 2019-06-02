import * as React from 'react'
import { Table, Row, Cell } from './styles'

const FileTable = () => (
  <Table>
    <Row>
      <th> ID </th>
      <th> Server name </th>
      <th> Filename </th>
      <th> Progress </th>
    </Row>
    <Row>
      <Cell>Data1</Cell>
      <Cell>Data2</Cell>
      <Cell>Data3</Cell>
      <Cell>Data4</Cell>
    </Row>
    <Row>
      <Cell>Data1</Cell>
      <Cell>Data2</Cell>
      <Cell>Data3</Cell>
      <Cell>Data4</Cell>
    </Row>
    <Row>
      <Cell>Data1</Cell>
      <Cell>Data2</Cell>
      <Cell>Data3</Cell>
      <Cell>Data4</Cell>
    </Row>
  </Table>
)

export default FileTable
