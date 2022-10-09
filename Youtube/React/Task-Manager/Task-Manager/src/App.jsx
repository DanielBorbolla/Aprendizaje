import { useState } from 'react'
import FccLogo from './Components/FccLogo/FccLogo'
import Tasklist from './Components/TaskList/TaskList'
import './App.css'

function App() {

  return (
    <div className="App">
      <FccLogo />

      <div className="main-container">
        <div className="Title-container">
          <div className="Title"> Mis Tareas</div>

        </div>
        <Tasklist />
      </div>

    </div>

  )
}

export default App
