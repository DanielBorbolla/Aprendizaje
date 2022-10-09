import React, { useState, useEffect } from 'react'
import { v4 } from 'uuid'




function Formulario({ pacientes, setPacientes, paciente, setPaciente }) {
  const [nombre, setNombre] = useState('')
  const [propietario, setProp] = useState('')
  const [email, setMail] = useState('')
  const [fecha, setFecha] = useState('')
  const [sintomas, setSint] = useState('')
  const [error, setError] = useState(false)
  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      llenarCasillas()
    }
  }, [paciente]
  )
  const llenarCasillas = () => {
    setNombre(paciente.nombre)
    setProp(paciente.propietario)
    setMail(paciente.email)
    setFecha(paciente.fecha)
    setSint(paciente.sintomas)
  }
  const cambiarError = () => setError(false)

  const handleSubmit = e => {
    e.preventDefault();

    if ([nombre, propietario, email, fecha, sintomas].includes('')) {
      setError(true)
      return;
    }

    setError(false)
    const nuevoPaciente = {
      nombre: nombre,
      propietario: propietario,
      email: email,
      fecha: fecha,
      sintomas: sintomas
    }

    if (paciente.id) {
      nuevoPaciente.id = paciente.id

      const pacientesActualizados = pacientes.map(pacienteMod => pacienteMod.id === paciente.id ? nuevoPaciente : pacienteMod)

      setPacientes(pacientesActualizados)
      setPaciente({})

    } else {
      nuevoPaciente.id = v4()
      setPacientes([...pacientes, nuevoPaciente])

    }

    setNombre('')
    setProp('')
    setMail('')
    setFecha('')
    setSint('')
  }


  return (
    <div className='md:w-1/2 lg:w-2/5 mb-10'>
      <h2 className='font-black md:text-3xl text-center'>
        Seguimiento Pacientes

      </h2>
      <p className='font-bold text-lg mt-5 text-center mb-10'>
        Añade Pacientes y <span className='text-indigo-600'> Administralos</span>
      </p>
      <form onSubmit={handleSubmit} className='bg-white shadow-md rounded-md py-10 px-5 mx-5' >
        {error && <div className='bg-red-800 text-white text-center p-2 uppercase font-bold mb-3 rounded-md'><p>todos los campos son obligatorios</p><img onClick={cambiarError} src='../../public/menu_cancel.png' /></div>}
        <div className='mb-5'>
          <label htmlFor="mascota" className='block text-gray-700 uppercase font-bold'>Nombre Mascota</label>
          <input
            id="mascota"
            type='text'
            placeholder='Nombre de la Mascota'
            className='border-2 w-full p-2 mt-2 placehorder-gray-400 rounded-sm'
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor="propietario" className='block text-gray-700 uppercase font-bold'>Propietario</label>
          <input
            id="propietario"
            type='text'
            placeholder='Nombre del Propietario'
            className='border-2 w-full p-2 mt-2 placehorder-gray-400 rounded-sm'
            value={propietario}
            onChange={e => setProp(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor="email" className='block text-gray-700 uppercase font-bold'>Email</label>
          <input
            id="email"
            type='email'
            placeholder='Email Contacto Propietario'
            className='border-2 w-full p-2 mt-2 placehorder-gray-400 rounded-sm'
            value={email}
            onChange={e => setMail(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor="alta" className='block text-gray-700 uppercase font-bold'>Fecha de alta</label>
          <input
            id="alta"
            type='date'
            className='border-2 w-full p-2 mt-2 placehorder-gray-400 rounded-sm'
            value={fecha}
            onChange={e => setFecha(e.target.value)}
          />
        </div>
        <div className='mb-5'>
          <label htmlFor="sintomas" className='block text-gray-700 uppercase font-bold'>Síntomas</label>
          <textarea
            id="sintomas"
            className='border-2 w-full p-2 mt-2 placehorder-gray-400 rounded-sm'
            placeholder='Describe los Síntomas de la mascota'
            value={sintomas}
            onChange={e => setSint(e.target.value)}


          />
        </div>
        <div className="items-center">

          <input
            type='submit'
            className='bg-indigo-600 w-4/5 p-3 text-white uppercase font-bold hover:bg-indigo-900 cursor-pointer transition-all'
            value={paciente.id ? 'Editar Paciente' : 'Agregar Paciente'}
          />
        </div>
      </form>
    </div>
  )
}

export default Formulario
