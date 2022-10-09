import React, { useState, useEffect } from 'react'
import Mensaje from './Mensaje'
import Cerrar from '../assets/img/cerrar.svg'
import { v4 } from 'uuid'

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar, setGastoEditar, setEdicion }) => {

  const [mensaje, setMensaje] = useState('')
  const [nombre, setNombre] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [categoria, setCategoria] = useState('')
  const [id, setID] = useState('')


  useEffect(() => {
    if (gastoEditar.id) {
      setNombre(gastoEditar.nombre)
      setCantidad(gastoEditar.cantidad)
      setCategoria(gastoEditar.categoria)
      setID(gastoEditar.id)
    }
  }, []
  )
  const handleSubmit = e => {
    e.preventDefault();
    if ([nombre, cantidad, categoria].includes('')) {
      setMensaje('Todos los campos son obligatorios')
      setTimeout(() => { setMensaje('') }, 2000)
      return
    }
    let id
    let fecha
    if (gastoEditar.id) {
      id = gastoEditar.id
      fecha = gastoEditar.fecha
    } else {
      id = v4()
      fecha = new Date()
    }
    setGastoEditar({})
    guardarGasto({ nombre, cantidad, categoria, id, fecha })

  }

  const handleCerrar = () => {
    setEdicion(false)
    setGastoEditar({})
    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)


    }, 500)
  }
  return (
    <div className='modal'>
      <div className="cerrar-modal">
        <img
          src={Cerrar}
          alt='X cerrar'
          onClick={handleCerrar}
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}
      >
        <legend>{gastoEditar.id ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>
        {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
            type="text"
            placeholder='Escribe el nombre del gasto'
            name=""
            id="nombre"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            type="number"
            placeholder='añade la cantidad del gasto'
            name=""
            id="cantidad"
            value={cantidad}
            onChange={e => setCantidad(Number(e.target.value))}
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoria</label>
          <select
            id='categoria'
            value={categoria}
            onChange={e => setCategoria(e.target.value)}
          >
            <option value=''>--Elija una -- </option>
            <option value='ahorro'>Ahorro</option>
            <option value='comida'>Comida</option>
            <option value='casa'>Casa</option>
            <option value='gastos'>Gastos Varios</option>
            <option value='ocio'>Ocio</option>
            <option value='salud'>Salud</option>
            <option value='mascota'>Mascota</option>
            <option value='auto'>Auto</option>
            <option value='suscripciones'>Suscripciones</option>
          </select>
        </div>

        <input
          type='submit'
          value={gastoEditar.id ? 'Guardar Cambios' : 'Añadir Gasto'}
        />
      </form>
    </div>
  )
}

export default Modal