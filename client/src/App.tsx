import * as React from 'react'
import { Provider } from 'react-redux'
import { createGlobalStyle } from 'styled-components'
import initStore from './store'
import FileTransfer from './screens/FileTransfer'

const { store } = initStore()

const GlobalStyles = createGlobalStyle`
    body {
        font-family: 'Montserrat', 'Arial', sans-serif;
        margin: 0;
    }
`

const App = () => (
  <Provider store={store}>
    <GlobalStyles />
    <FileTransfer />
  </Provider>
)

export default App
