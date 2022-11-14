import React from 'react'
import { useState } from 'react' 
import { Link } from 'react-router-dom'
import Alerta from '../components/Alerta'



const Registrar = () => {

    const [ idPaciente, setidPaciente ] = useState('')
    const [ nombre, setNombre ] = useState('')
    const [ correo, setCorreo ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ telefono, setTelefono ] = useState('')
    const [ epsUsuario, setEpsUsuario ] = useState('')
    
    const [ alerta, setAlerta ] = useState({})

    const handleSubmit = async e => {
        e.preventDefault();

        if([idPaciente,nombre, correo, password, telefono, epsUsuario].includes('')) {
           setAlerta({
               msg: 'Todos los campos son obligatorios',
               error: true
           })
           return
        }

        

        if(password.length < 6 ) {
            setAlerta({
                msg: 'El Password es muy corto, agrega minimo 6 caracteres',
                error: true
            })
            return
        }

        setAlerta({})

        // Crear el usuario en la API
        /* try {
            const { data } = await clienteAxios.post(`/paciente`, {idPaciente,nombre, correo, password, telefono, epsUsuario} )

            setAlerta({
                msg: data.msg,
                error: false
            })
            setidPaciente('')
            setNombre('')
            setCorreo('')
            setPassword('')
            setTelefono('')
            setEpsUsuario('')
        } catch (error) {
            setAlerta({
                msg: error.response.data.msg,
                error: true
            })
        }*/
    } 

    const { msg } = alerta

  return (
    <>
        <h1 className="text-sky-600 font-black text-6xl capitalize">Crea tu Cuenta y Administra tus {''}
            <span className="text-slate-700">CITAS MEDICAS</span>
        </h1>

        { msg && <Alerta alerta={alerta} /> }
    
        <form 
            className="my-10 bg-white shadow rounded-lg p-10"
            onSubmit={handleSubmit}
        >
            <div className="my-5">
                <label 
                    className="uppercase text-gray-600 block text-xl font-bold"
                    htmlFor="idPaciente"
                >Identificacion Paciente</label>
                <input
                    id="idPaciente"
                    type="text"
                    placeholder="Identificacion Usuario"
                    className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                    value={idPaciente}
                    onChange={e => setidPaciente(e.target.value)}
                />
            </div>
            <div className="my-5">
                <label 
                    className="uppercase text-gray-600 block text-xl font-bold"
                    htmlFor="nombre"
                >Nombre</label>
                <input
                    id="nombre"
                    type="text"
                    placeholder="Tu Nombre"
                    className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
            </div>

            <div className="my-5">
                <label 
                    className="uppercase text-gray-600 block text-xl font-bold"
                    htmlFor="email"
                >Correo electronico</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Email de Registro"
                    className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                    value={correo}
                    onChange={e => setCorreo(e.target.value)}
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
                    placeholder="Asigna un Password de Registro"
                    className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </div>

            <div className="my-5">
                <label 
                    className="uppercase text-gray-600 block text-xl font-bold"
                    htmlFor="telefono"
                >Telefono Usuario</label>
                <input
                    id="telefono"
                    type="telefono"
                    placeholder="Registra tu telefono"
                    className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                    value={telefono}
                    onChange={e => setTelefono(e.target.value)}
                />
            </div>
            <div className="my-5">
                <label 
                    className="uppercase text-gray-600 block text-xl font-bold"
                    htmlFor="epsUsuario"
                >EPS Usuario</label>
                <input
                    id="epsUsuario"
                    type="epsUsuario"
                    placeholder="EPS del Usuario"
                    className="w-full mt-3 p-3 border rounded-xl bg-gray-50"
                    value={epsUsuario}
                    onChange={e => setEpsUsuario(e.target.value)}
                />
            </div>
            <input 
                type="submit"
                value="Crear Cuenta"
                className="bg-sky-700 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors"
            />
            
        </form>

        <nav className="lg:flex lg:justify-between">
            <Link 
                className='block text-center my-5 text-slate-500 uppercase text-sm'
                to="/login"
            >¿Ya tienes una cuenta? Inicia Sesión</Link>

            <Link 
                className='block text-center my-5 text-slate-500 uppercase text-sm'
                to="/forget"
            >Olvide Mi Password</Link>
        </nav>
    
    </>
  )
}
  
export default Registrar
