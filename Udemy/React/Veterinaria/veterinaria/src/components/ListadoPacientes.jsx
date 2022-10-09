import React, { useState, useEffect } from 'react'
import Paciente from './Paciente'

function ListadoPacientes({ pacientes, setPaciente, borrarPaciente }) {


  return (
    <div className='md:w-1/2 lg:w-3/5'>
      {pacientes && pacientes.length ? (
        <>
          <h2 className='font-black md:text-3xl text-center'>
            ListadoPacientes
          </h2>
          <p className='font-bold text-lg mt-5 text-center mb-10'>
            Administra tus <span className='text-indigo-600'>Pacientes y citas</span>
          </p>
          <div className='md:h-screen md:overflow-y-scroll'>
            {
              pacientes.map((paciente) =>
                <Paciente
                  key={paciente.id}
                  paciente={paciente}
                  setPaciente={setPaciente}
                  borrarPaciente={borrarPaciente}

                />
              )
            }
          </div>
        </>

      ) : (
        <>
          <h2 className='font-black md:text-3xl text-center'>
            no hay pacientes
          </h2>
          <p className='font-bold text-lg mt-5 text-center mb-10'>
            agrega tus pacientes <span className='text-indigo-600'>y aquí  los verás </span>
          </p>
        </>
      )

      }
    </div>

  )
}

export default ListadoPacientes