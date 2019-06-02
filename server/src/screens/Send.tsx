import * as React from 'react'
import Table from '../components/Table'
import { useState } from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { GetEncryptedFiles } from '../store/reducer/selectors/file'
import { GetAllClients } from '../store/reducer/selectors/client'
import { AbsoluteFab } from '../styled/inputs'
import styled from 'styled-components'
import { TransferActions } from '../store/reducer/actions/transfer'
import requestStartTransfer = TransferActions.requestStartTransfer

type StateProps = {
  files: IFile[]
  clients: IClient[]
}
type DispatchProps = {
  onStartTransfer: (client: IClient, file: IFile) => void
}
type OwnProps = {}

const mapStateToProps: (state: AppState) => StateProps = state => ({
  files: GetEncryptedFiles(state),
  clients: GetAllClients(state),
})

const mapDispatchToProps: (dispatch: Dispatch) => DispatchProps = dispatch => ({
  onStartTransfer: (client, file) => {
    dispatch(requestStartTransfer({ client, file }))
  },
})

type Props = StateProps & DispatchProps & OwnProps

const Body = styled.div`
  display: flex;
  position: relative;
  height: 100%;

  flex-direction: row;
`

const SendScreen: React.FC<Props> = ({ clients, files, onStartTransfer }) => {
  const [selectedClient, setSelectedClient] = useState(-1)
  const [selectedFile, setSelectedFile] = useState(-1)

  const _client = {
    headers: ['IP', 'Port'],
    data: clients.map(client => [client.ip, client.port] as [string, number]),
  }
  const _file = {
    headers: ['File Name', 'Mode'],
    data: files.map(file => [file.name, file.mode] as [string, string]),
  }

  const _transferButton = {
    display: selectedClient >= 0 && selectedFile >= 0,
    onClick: () => {
      onStartTransfer(clients[selectedClient], files[selectedFile])
      setSelectedClient(-1)
      setSelectedFile(-1)
    },
  }

  return (
    <Body>
      <Table
        selected={selectedClient}
        onSelect={setSelectedClient}
        headers={_client.headers}
        data={_client.data}
      />
      <Table
        selected={selectedFile}
        onSelect={setSelectedFile}
        headers={_file.headers}
        data={_file.data}
      />
      {_transferButton.display && (
        <AbsoluteFab onClick={_transferButton.onClick}>Start transfer!</AbsoluteFab>
      )}
    </Body>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SendScreen)
