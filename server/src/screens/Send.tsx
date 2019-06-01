import * as React from 'react'
import AddFileBar from './Encrypt'
import Table from '../components/Table'

type StateProps = {}
type DispatchProps = {}
type OwnProps = {}

type Props = StateProps & DispatchProps & OwnProps

const SendScreen: React.FC<Props> = ({}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <Table headers={['ID', 'Name']} data={[['id', 'name']]} />
      <Table
        headers={['Selected', 'File Name', 'Mode']}
        data={[[<input type="checkbox" />, 'filename', 'cbc']]}
      />
    </div>
  )
}

export default SendScreen
