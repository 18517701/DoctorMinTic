import { Link } from "react-router-dom";
import { useState } from "react";

function Login () {

  
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  
    return(


      <div className="container 2xl-auto mt-5 min-w-64-full:mt-20 p-5 md:flex md:justify-center">
        
      <h1 className="text-sky-600 font-blue accent-gray text-6xl capitalize">Inicia sesión y solicita tu 
      <span className="text-slate-700"> CITA MEDICA</span>
  </h1>

  

  <form 
      
      className=" my-10 bg-white shadow rounded-lg p-10">
     
  
      <div className="my-5">
          <label 
              className="uppercase text-gray-600 block text-xl font-bold"
              htmlFor="email"
          >Email</label>
          <input
              id="email"
              type="email"
              placeholder="Email de Registro"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              value={correo}
              onChange={ e => setCorreo(e.target.value)}
          />
      </div>
      <div className="my-5">
          <label 
              className="uppercase text-gray-600 block text-xl font-bold"
              htmlFor="password"
          >Password</label>
          <input
              id="password"
              type="password"
              placeholder="Password de Registro"
              className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
              value={password}
              onChange={ e => setPassword(e.target.value)}
          />
      </div>

      <input 
          type="submit"
          value="Iniciar Sesión"
          className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
      />
      
  </form>

  <nav className="lg:flex lg:justify-between">
      <Link 
          className='block text-center my-5 text-slate-500 uppercase text-sm'
          to="/registrar"
      >¿No tienes una cuenta? Regístrate</Link>

      <Link 
          className='block text-center my-5 text-slate-500 uppercase text-sm'
          to="/forget"
      >Olvide Mi Password</Link>
  </nav>
</div>

      
    )
    
}

export default Login;