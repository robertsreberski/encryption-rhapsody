import { Store } from 'redux'
import { subscribeToClients } from './subscribe'

const initServerApi = (store: Store) => {
  subscribeToClients(store)
}

export default initServerApi
