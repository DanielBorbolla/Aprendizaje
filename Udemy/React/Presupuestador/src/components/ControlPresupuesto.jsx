import React, { useState, useEffect } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const ControlPresupuesto = ({ presupuesto, setPresupuesto, gastos, setGastos, setIsValidPresupuesto }) => {
  const [porcentaje, setPorcentaje] = useState(0)
  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)

  useEffect(() => {
    const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0)
    const totalDisponible = presupuesto - totalGastado
    const porcentajeGastado = (((presupuesto - totalDisponible) / presupuesto) * 100).toFixed(2)

    setGastado(totalGastado)
    setDisponible(totalDisponible)
    setTimeout(() => {
      setPorcentaje(porcentajeGastado)
    }, 1000)
  }, [gastos])

  const formatoPresupuesto = (cantidad) => {
    return cantidad.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    })
  }
  const handleResetApp = () => {
    const pregunta = confirm('¿Deseas Reiniciar la App?')
    if (pregunta) {
      setPresupuesto(0)
      setGastos([])
      setIsValidPresupuesto(false)
      return
    }
  }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: porcentaje > 100 ? '#DC2626' : '#3b82f6',
            trailColor: '#f5f5f5',
            pathTransitionDuration: 0.8,
            textColor: porcentaje > 100 ? '#DC2626' : '#3b82f6'
          })}
          value={porcentaje}
          text={`${porcentaje}% Gastado`}
        />
      </div>

      <div className="contenido-presupuesto">
        <button className='reset-app'
          type='button'
          onClick={handleResetApp}
        >
          Reiniciar presupuesto
        </button>
        <p><span>Presupuesto:</span>{formatoPresupuesto(presupuesto)}</p>
        <p className={`${disponible < 0 ? 'negativo' : ''}`}><span>Disponible:</span>{formatoPresupuesto(disponible)}</p>
        <p><span>Gastado:</span>{formatoPresupuesto(gastado)}</p>
      </div>

    </div>
  )
}

export default ControlPresupuesto