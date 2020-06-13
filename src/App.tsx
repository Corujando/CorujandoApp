import { LocalShipping } from '@material-ui/icons'
import React from 'react'
import './App.css'
import './App.scss'
import { CRMap, MarkerComponent } from './components/generics/CRMap'

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<CRMap
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
				/>
			</header>
		</div>
	)
}

export default App
