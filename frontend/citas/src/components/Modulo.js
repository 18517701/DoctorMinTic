import React from 'react'

const Modulo = () => {

    const paciente = () => {};

  return (
    <div className="container 2xl-auto mt-5 min-w-64-full:mt-20 p-5 md:flex md:justify-center">
            <h2 className="font-black text-3xl text-center">Solicitud Citas</h2>

            <p className="text-lg mt-5 text-center mb-10">
                Solicita tus citas y  {''}
                <span className="text-indigo-600 font-bold ">Administralas</span>
            </p>

            <form 
                
                className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
            >
                
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font-bold">
                        Nombre Paciente
                    </label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de paciente"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        
                        
                    />  
                </div>

                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font-bold">
                        Especialidad Medica
                    </label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Especialidad Medica"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        
                    />  
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font-bold">
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email Paciente"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        
                    />  
                </div>

                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font-bold">
                        Fecha prevista
                    </label>
                    <input
                        id="alta"
                        type="date"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        
                    />  
                </div>

                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font-bold">
                        Síntomas
                    </label>
                    <textarea 
                        id="sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe los Síntomas"
                        
                    />
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value={ paciente.id ? 'Editar Paciente' : 'Solicitud cita' }
                />
            </form>
        </div>
  )
}

export default Modulo