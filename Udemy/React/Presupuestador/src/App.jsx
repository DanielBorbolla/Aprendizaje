import { useState, useEffect } from 'react'
import Header from './components/Header'
import IconoNuevoGasto from './assets/img/nuevo-gasto.svg'
import Modal from './components/Modal'
import ListadoGastos from './components/ListadoGastos'
import Filtros from './components/Filtros'


function App() {
  const [presupuesto, setPresupuesto] = useState(Number(localStorage.getItem('presupuesto')) ?? 0)
  const [isValidPresupuesto, setIsValidPresupuesto] = useState(false)
  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)
  const [gastos, setGastos] = useState(JSON.parse(localStorage.getItem('gastos')) ?? [])
  const [gastoEditar, setGastoEditar] = useState({})
  const [edicion, setEdicion] = useState(false)
  const [filtro, setFiltro] = useState('')
  const [listaFiltrada, setListaFiltrada] = useState([])

  useEffect(() => {
    if (presupuesto > 0) {
      setIsValidPresupuesto(true)
    }
  }, [])


  useEffect(() => {
    if (gastoEditar.id) {
      setModal(true)
      setTimeout(() => {
        setAnimarModal(true)

      }, 500)
    }
  }, [gastoEditar])
  useEffect(() => {
    localStorage.setItem('presupuesto', presupuesto ?? 0)
  }, [presupuesto])

  useEffect(() => {
    localStorage.setItem('gastos', JSON.stringify(gastos) ?? [])
  }, [gastos])

  useEffect(() => {
    if (filtro) {
      const gastosFiltrados = gastos.filter(gasto => gasto.categoria === filtro)
      setListaFiltrada(gastosFiltrados)
    }
  }, [filtro])


  const handleNuevoGasto = () => {
    setModal(true)
    setTimeout(() => {
      setAnimarModal(true)

    }, 500)

  }
  const borrarGasto = gasto => {
    const alerta = confirm('¿Deseas eliminar este gasto?')
    if (alerta) {
      const gastosActualizados = gastos.filter(gastoMod => gasto.id !== gastoMod.id);
      setGastos(gastosActualizados)
    }

  }
  const guardarGasto = gasto => {
    if (edicion) {
      setEdicion(false)
      const gastosActualizados = gastos.map(gastoMod => gastoMod.id === gasto.id ? gasto : gastoMod)
      setGastos(gastosActualizados)
    } else {
      setGastos([...gastos, gasto])
    }
    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)

    }, 500)
  }
  return (
    <div className={modal ? 'fijar' : ''} >
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto={isValidPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
        gastos={gastos}
        setGastos={setGastos}

      />
      {isValidPresupuesto ? (
        <>
          <main>
            <Filtros
              filtro={filtro}
              setFiltro={setFiltro}



            />
            <ListadoGastos
              gastos={gastos}
              setGastoEditar={setGastoEditar}
              borrarGasto={borrarGasto}
              setEdicion={setEdicion}
              filtro={filtro}
              listaFiltrada={listaFiltrada}
            />
          </main>
          <div className="nuevo-gasto">
            <img
              src={IconoNuevoGasto}
              alt='icono nuevo gasto'
              onClick={handleNuevoGasto}
            />
          </div>
        </>
      ) : null}
      {modal && <Modal
        setModal={setModal}
        animarModal={animarModal}
        setAnimarModal={setAnimarModal}
        guardarGasto={guardarGasto}
        gastoEditar={gastoEditar}
        setGastoEditar={setGastoEditar}
        setEdicion={setEdicion}

      />}




    </div>
  )
}

export default App