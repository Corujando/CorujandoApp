import React from 'react'
import './App.scss'
import { Login } from './components/screens/Login/Login'

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      {/* <CRMap
        zoom={12}
        MarkerComponent={LocalShipping as MarkerComponent}
        marker={{
          lat: -30.056,
          lng: -51.1622,
          htmlColor: 'black',
          style: {
            fontSize: '50',
          },
        }}
      /> */}
      <Login />
    </div>
  )
}

export default App
