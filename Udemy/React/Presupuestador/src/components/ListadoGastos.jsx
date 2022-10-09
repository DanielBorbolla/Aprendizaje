import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({ gastos, setGastoEditar, borrarGasto, setEdicion, filtro, listaFiltrada }) => {
  return (
    <div className='listado-gastos contenedor sombra'>
      {
        filtro ? (

          <>
            <h2>{listaFiltrada.length ? 'Gastos' : 'No hay Gastos en esta categoría'}</h2>
            {listaFiltrada.map(gasto => (

              <Gasto
                key={gasto.id}
                gasto={gasto}
                setGastoEditar={setGastoEditar}
                borrarGasto={borrarGasto}
                setEdicion={setEdicion}
              />
            ))

            }
          </>
        ) : (
          <>
            <h2>{gastos.length ? 'Gastos' : 'Agrega tus gastos'}</h2>
            {gastos.map(gasto => (

              <Gasto
                key={gasto.id}
                gasto={gasto}
                setGastoEditar={setGastoEditar}
                borrarGasto={borrarGasto}
                setEdicion={setEdicion}
              />
            ))
            }
          </>
        )}
    </div>
  )
}

export default ListadoGastos
