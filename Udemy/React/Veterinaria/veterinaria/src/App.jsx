import { useState, useEffect } from 'react'
import Formulario from "./components/formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? []);
  const [paciente, setPaciente] = useState({});


  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes))

  }, [pacientes])

  const borrarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(pacienteMod => pacienteMod.id !== id);
    setPacientes(pacientesActualizados)

  }
  return (
    <div className="container mx-auto mt-20 ">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          setPacientes={setPacientes}
          pacientes={pacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          setPacientes={setPacientes}
          pacientes={pacientes}
          setPaciente={setPaciente}
          borrarPaciente={borrarPaciente}

        />
      </div>

    </div>
  )
}

export default App
