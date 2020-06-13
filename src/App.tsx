import React from 'react'
import './App.scss'
import { Loading } from './components/screens/Loading/Loading'

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
      <Loading />
    </div>
  )
}

export default App
