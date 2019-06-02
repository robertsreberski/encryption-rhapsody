import * as React from 'react'
import { GlobalStyle } from './styled/global'
import MainNavigator from './navigation/MainNavigator'
import EncryptScreen from './screens/Encrypt'
import SendScreen from './screens/Send'
import TransferHistoryScreen from './screens/TransferHistory'
import initStore from './store'
import { Provider } from 'react-redux'

const { store } = initStore()

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <GlobalStyle />
        <MainNavigator
          entries={[
            {
              name: 'Encrypt',
              component: EncryptScreen,
            },
            {
              name: 'Send',
              component: SendScreen,
            },
            {
              name: 'Tranfers',
              component: TransferHistoryScreen,
            },
          ]}
        />
      </Provider>
    )
  }
}

export default App
