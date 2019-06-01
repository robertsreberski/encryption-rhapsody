import * as React from 'react'
import Table from '../components/Table'

type StateProps = {}
type DispatchProps = {}
type OwnProps = {}

type Props = StateProps & DispatchProps & OwnProps

const TransferHistoryScreen: React.FC<Props> = ({}) => {
  return (
    <>
      <Table headers={['ID', 'Client Name', 'File Name', 'Progress']} data={[]} />
    </>
  )
}

export default TransferHistoryScreen
