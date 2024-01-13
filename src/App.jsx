import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import BubbaShrimp from './pages/BubbaShrimp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      <BubbaShrimp/>
    </>
  )
}

export default App
