import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Login from './components/Login.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Login />
    </>
  )
}

export default App
