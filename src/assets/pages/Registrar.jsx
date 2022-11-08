import { useState } from 'react'
import {Await, Link} from 'react-router-dom'
import Alerta from '../../components/Alerta'
import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'



  const Registrar = () => {
  const { idPaciente , setidPaciente } = useState('')
  const [nombrePaciente, setNombrePaciente] = useState('')
  const [correo , setCorreo] = useState('')
  const [password, setPassword] = useState('')
  const [telefono, setTelefono] = useState('')
  const [epsUsuario, setEpsUsuario] = useState('')
  const [alerta, setAlerta] = useState({})	

  const handleSubmit = async e => {
    e.preventDefault();
    if([idPaciente, nombrePaciente, correo, password, telefono, epsUsuario].includes('')){
      setAlerta({
          msg:'Por favor llena todos los campos',
          error:true
    
      })
      return
    }

       setAlerta({})

    try {
      const respuesta = await axios.post('http://localhost:4000/paciente/all', {
        idPaciente, nombrePaciente, correo, password, telefono, epsUsuario})
        console.log(respuesta)
    } catch (error) {
      
    }
  }

  const { msg } = alerta;

  const Toast = withReactContent(Swal);
  
   const showSwal= () => {

    const Toast = Swal.mixin({
      toast: true,
      position: 'center',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    });
    
    Toast.fire({
      icon: 'success',
      title: 'Usuario registrado correctamente'
    })


}
 
  return (
    
<div className="container">
{msg && <Alerta alerta= {alerta}/>}
  <body>
  <div className="container">
    <div class="login-box">
  <div class="login-logo">
    <a href="#"><b>CITAS </b>MEDICAS</a>
  </div>
  
  <div className="card">
    <div class="card-body login-card-body">
      
 
      <form>
      <div className="input-group mb-3"
          
          onSubmit={handleSubmit}>
            
          <input type="text" class="form-control" placeholder="Identificacion Paciente" ></input>
            <div class="input-group-append">
            <div class="input-group-text" >
              <span class="fas fa-envelope"
              value = {idPaciente}
              onchange= {e => setidPaciente(e.target.value)}></span>
            </div>
          </div>
        </div>
      <div className="input-group mb-3">
          <input type="text" class="form-control" placeholder="Nombre Paciente"></input>
            <div class="input-group-append">
            <div class="input-group-text" >
              <span class="fas fa-envelope"
              value = {nombrePaciente}
              onchange= {e => setNombrePaciente(e.target.value)}></span>
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="email" class="form-control" placeholder="Email"></input>
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-envelope"
              value = {correo}
              onchange= {e => setCorreo(e.target.value)}></span>
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" class="form-control" placeholder="Password"></input>
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"
              value = {password}
              onchange= {e => setPassword(e.target.value)}></span>
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="text" class="form-control" placeholder="No telefono"></input>
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"
              value = {telefono}
              onchange= {e => setTelefono(e.target.value)}></span>
            </div>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="text" class="form-control" placeholder="EPS USUARIO"></input>
          <div class="input-group-append">
            <div class="input-group-text">
              <span class="fas fa-lock"
              value = {epsUsuario}
              onchange= {e => setEpsUsuario(e.target.value)}></span>
            </div>
          </div>
        </div>
        <div className="row">
          <button onclick={showSwal} class="btn btn-primary btn-block">Registrarme</button>
          <Link to = "/" button="submit" class="btn btn-danger btn-block">Volver a Inicio </Link>
          </div>

        </form>
        </div>
      </div>
      </div>
      </div>
  </body>
  </div>  
  )
}

export default Registrar
