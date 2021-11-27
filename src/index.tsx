import { createWeb3ReactRoot, Web3ReactProvider } from '@web3-react/core'
import 'inter-ui'
import React, { StrictMode, useContext } from 'react'
import { isMobile } from 'react-device-detect'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter } from 'react-router-dom'
import { NetworkContextName } from './constants'
import './i18n'
import App from './pages/App'
import store from './state'
import ApplicationUpdater from './state/application/updater'
import ListsUpdater from './state/lists/updater'
import MulticallUpdater from './state/multicall/updater'
import TransactionUpdater from './state/transactions/updater'
import UserUpdater from './state/user/updater'
import ThemeProvider, { FixedGlobalStyle, ThemedGlobalStyle } from './theme'
import { ThemeProvider as NewThemeProvider } from '@pangolindex/components'
import getLibrary from './utils/getLibrary'
import { ThemeContext } from 'styled-components'
import { useIsBetaUI } from './hooks/useLocation'

const Web3ProviderNetwork = createWeb3ReactRoot(NetworkContextName)

if ('ethereum' in window) {
  ;(window.ethereum as any).autoRefreshOnNetworkChange = false
}

function Updaters() {
  return (
    <>
      <ListsUpdater />
      <UserUpdater />
      <ApplicationUpdater />
      <TransactionUpdater />
      <MulticallUpdater />
    </>
  )
}

const ComponentThemeProvider = () => {
  const isBeta = useIsBetaUI()
  const theme = useContext(ThemeContext)

  return (
    <NewThemeProvider theme={theme as any}>
      <FixedGlobalStyle isBeta={isBeta} />
      <ThemedGlobalStyle isBeta={isBeta} />
      <HashRouter>
        <App />
      </HashRouter>
    </NewThemeProvider>
  )
}

ReactDOM.render(
  <StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <Web3ProviderNetwork getLibrary={getLibrary}>
        <Provider store={store}>
          <Updaters />
          <ThemeProvider>
            <ComponentThemeProvider />
          </ThemeProvider>
        </Provider>
      </Web3ProviderNetwork>
    </Web3ReactProvider>
  </StrictMode>,
  document.getElementById('root')
)
