import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import { Home } from './Pages/Home'
import { FullMap } from './Pages/FullMap'
import { Map } from './Pages/Map'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Routes>
       <Route path='/' Component={Home} /> 
       <Route path='/fullmap' Component={FullMap} />
       <Route path='/map/:name/:lat/:lng' Component={Map} />
       </Routes>
    </>
  )
}

export default App
