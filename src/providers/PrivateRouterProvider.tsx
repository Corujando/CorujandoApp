import React, { createContext, useContext } from 'react'
import { Router } from 'react-router'
import { History, LocationState } from 'history'

export interface PrivateRouterProps {
  loginPath: string

  homePath: string

  loadingPath: string

  browserHistory?: History<LocationState>

  children?: any
}

export interface PrivateRouterContextData {
  loginPath: string

  homePath: string

  loadingPath: string

  browserHistory?: History<LocationState>
}

const PrivateRouterContext = createContext({
  loginPath: '',
  homePath: '',
  loadingPath: '',
} as PrivateRouterContextData)

const PrivateRouter = (props: PrivateRouterProps): JSX.Element => {
  const getHistory = (): History<LocationState> => {
    if (props.browserHistory) {
      return props.browserHistory
    }

    throw Error('Private Router needs a History.')
  }

  const context: PrivateRouterContextData = {
    homePath: props.homePath,
    loginPath: props.loginPath,
    loadingPath: props.loadingPath,
    browserHistory: props.browserHistory,
  }

  return (
    <Router history={getHistory()}>
      <PrivateRouterContext.Provider value={context}>
        {props.children}
      </PrivateRouterContext.Provider>
    </Router>
  )
}

export const usePrivateRouter = () => useContext(PrivateRouterContext)

export default PrivateRouter
