import React from 'react'

function Paciente({ paciente, setPaciente, borrarPaciente }) {
  const { nombre, propietario, email, fecha, sintomas } = paciente
  const handleEliminar = () => {
    const respuesta = confirm('Deseas eliminar al paciente?');
    if (respuesta) { borrarPaciente(paciente.id) }
  }
  return (
    <div className='m-5 bg-white shadow-md px-5 py-10 rounded-xl '>
      <p className='font-bold mb-3 text-gray-700  uppercase'>Nombre: <span className='font-normal capitalize '>{nombre}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700  uppercase'>Propietario: <span className='font-normal capitalize '>{propietario}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700  uppercase'>Email: <span className='font-normal normal-case '>{email}</span>
      </p>
      <p className='font-bold mb-3 text-gray-700  uppercase'>Fecha Alta: <span className='font-normal capitalize '>{fecha}</span>
      </p>


      <p className='font-bold mb-3 text-gray-700  uppercase'>Síntomas: <span className='font-normal normal-case '>{sintomas}</span>
      </p>
      <div className='flex justify-between'>
        <button type="button"
          className='py-2 px-10 bg-indigo-600 hover:bg-indigo-900 cursor-pointer transition-all text-white font-bold uppercase rounded-lg'
          onClick={() => setPaciente(paciente)}
        >Editar</button>
        <button type="button"
          className='py-2 px-10 bg-red-600 hover:bg-red-900 cursor-pointer transition-all text-white font-bold uppercase rounded-lg'
          onClick={handleEliminar}
        >Eliminar</button>

      </div>
    </div>
  )
}

export default Paciente