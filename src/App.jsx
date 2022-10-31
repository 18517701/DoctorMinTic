import { useState } from 'react'
import Login from './components/Login.jsx'
import Forget from './components/Forget.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Login />
    <Forget />

    </>
  )
}

export default App
