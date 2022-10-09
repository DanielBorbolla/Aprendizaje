
import './Styles/App.css';
import Boton from './componentes/boton'
import Contador from './componentes/Contador'
import logoFreeCodeCamp from "./img/freecodecamp-logo.png"
import { useState } from 'react';

function App() {
  const [numClicks, setNumClicks] = useState(0); 
  const manejarClick = () => {
    setNumClicks(numClicks +1)
    
  }
  const reiniciarContador = () => {
    setNumClicks(0)



  }
  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img className='freecodecamp-logo'
          src={logoFreeCodeCamp}
          alt= "logo de free code camp"
        />
      </div>
      <div className="contenedor-contador">
        <Contador numClicks={ numClicks } />
        <Boton texto="Click" esBotonDeClick={true} manejarClick={manejarClick} />
        <Boton texto="Reiniciar" esBotonDeClick={false} manejarClick={reiniciarContador} />
        
      </div>
    </div>
  );
}

export default App;
