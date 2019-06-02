import * as React from 'react'
import Table from '../components/Table'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { useState } from 'react'
import { GetAllTransfers } from '../store/reducer/selectors/transfer'

type StateProps = {
  transfers: ITransfer[]
}
type DispatchProps = {}
type OwnProps = {}

const mapStateToProps: (state: AppState) => StateProps = state => ({
  transfers: GetAllTransfers(state),
})

const mapDispatchToProps: (dispatch: Dispatch) => DispatchProps = dispatch => ({})

type Props = StateProps & DispatchProps & OwnProps

const TransferHistoryScreen: React.FC<Props> = ({ transfers }) => {
  const [selected, setSelected] = useState(-1)

  const _transfer = {
    headers: ['Client IP/PORT', 'File Name', 'Progress'],
    data: transfers.map(
      transfer =>
        [(transfer.client as IClient).id, (transfer.file as IFile).id, transfer.progress] as [
          string,
          string,
          number
        ]
    ),
  }

  return (
    <>
      <Table
        headers={_transfer.headers}
        data={_transfer.data}
        selected={selected}
        onSelect={setSelected}
      />
    </>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransferHistoryScreen)
