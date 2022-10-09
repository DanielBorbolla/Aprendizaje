import React, { useState } from 'react'
import Mensaje from './Mensaje';

const NuevoPresupuesto = ({ presupuesto, setPresupuesto, setIsValidPresupuesto }) => {

  const [mensaje, setMensaje] = useState('')

  const presupuestoHandle = e => {
    e.preventDefault();
    if (!presupuesto || presupuesto < 0) {
      setMensaje('Ingrese un presupuesto válido')
      return
    }
    setMensaje('')
    setIsValidPresupuesto(true)
  }
  return (
    <div className='contenedor-presupuesto contenedor sombra'>
      <form className='formulario' onSubmit={presupuestoHandle}>
        <div className="campo">

          <label> Definir presupuesto</label>
          <input
            className='nuevo-presupuesto'
            type="number"
            placeholder='Pon aquí tu presupuesto'
            value={presupuesto}
            onChange={e => setPresupuesto(Number(e.target.value))}
          />
        </div>

        <input type="submit" value="Añadir" />
        {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
      </form>
    </div>
  )
}

export default NuevoPresupuesto