import React, { useState, useEffect } from 'react'

const Filtros = ({ filtro, setFiltro }) => {
  return (
    <div className='filtros sombra contenedor'>
      <form action="">
        <div className="campo">
          <label>Filtrar Gastos</label>
          <select name="" id=""
            value={filtro}
            onChange={e => setFiltro(e.target.value)}

          >
            <option value=''>--Todos-- </option>
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
      </form>
    </div>
  )
}

export default Filtros