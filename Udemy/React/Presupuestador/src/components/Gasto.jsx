import React from 'react'
import IconoAhorro from '../assets/img/icono_ahorro.svg'
import IconoCasa from '../assets/img/icono_casa.svg'
import IconoComida from '../assets/img/icono_comida.svg'
import IconoGastos from '../assets/img/icono_gastos.svg'
import IconoOcio from '../assets/img/icono_ocio.svg'
import IconoSalud from '../assets/img/icono_salud.svg'
import IconoMascota from '../assets/img/icono_mascota.png'
import IconoAuto from '../assets/img/icono_auto.png'
import IconoSuscripciones from '../assets/img/icono_suscripciones.svg'

import { LeadingActions, SwipeableList, SwipeableListItem, SwipeAction, TrailingActions } from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css'

const Gasto = ({ gasto, setGastoEditar, borrarGasto, setEdicion }) => {
  const diccionarioIconos = {
    ahorro: IconoAhorro,
    comida: IconoComida,
    casa: IconoCasa,
    gastos: IconoGastos,
    ocio: IconoOcio,
    salud: IconoSalud,
    mascota: IconoMascota,
    auto: IconoAuto,
    suscripciones: IconoSuscripciones
  }
  const { categoria, nombre, cantidad, id, fecha } = gasto
  const handleEdicion = () => {
    setGastoEditar(gasto)
    setEdicion(true)
  }
  const fechaFormateada = nfecha => {
    const nuevaFecha = new Date(nfecha)
    const opciones = {
      year: 'numeric',
      month: 'long',
      day: '2-digit'
    }
    return nuevaFecha.toLocaleDateString('es-ES', opciones)
  }
  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={handleEdicion}>
        Editar

      </SwipeAction>
    </LeadingActions>)
  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => borrarGasto(gasto)}
      // destructive={true}
      >
        Borrar

      </SwipeAction>
    </TrailingActions>)

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >


        <div className='gasto sombra'>
          <div className="contenido-gasto">
            <img
              src={diccionarioIconos[categoria]}
              alt={`icono de ${categoria}`}
            />
            <div className="descripcion-gasto">
              <p className='categoria'>
                {categoria}
              </p>
              <p className="nombre-gasto">
                {nombre}
              </p>
              <p className="fecha-gasto">Agregado el: <span>{fechaFormateada(fecha)}</span></p>

            </div>
          </div>
          <p className="cantidad-gasto">${cantidad}</p>




        </div>
      </SwipeableListItem>
    </SwipeableList>
  )
}

export default Gasto