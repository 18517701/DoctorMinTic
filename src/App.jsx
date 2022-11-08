import { useState } from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/Login.jsx'
import Forget from './assets/pages/Forget.jsx'
import AuthLayouts from './assets/layouts/AuthLayouts.jsx'
import Registrar from './assets/pages/Registrar'
import './App.css'




function App() {
  const [count, setCount] = useState(0)

  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AuthLayouts/>}>
         <Route index element={<Login/>}/>
          <Route path="forget" element={<Forget/>}/>
            <Route path="registrar" element={<Registrar/>}/>
      
      </Route>
    </Routes>

    </BrowserRouter>
    )
}

export default App
