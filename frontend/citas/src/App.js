import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthLayouts from './layouts/AuthLayout';
import Login from './components/Login';
import './index.css'
import Forget from './components/Forget';
import Registrar from './components/Registrar';
import Modulo from './components/Modulo'

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<AuthLayouts/>}>
            <Route path ="login" exact element={<Login/>}/>
           <Route path="forget" element={<Forget/>}/>
           <Route path="registrar" element={<Registrar/>}/>
            <Route path="modulo" element={<Modulo/>}/>
      
        </Route>
      </Routes>

    </BrowserRouter>

        
  );
}

export default App;
