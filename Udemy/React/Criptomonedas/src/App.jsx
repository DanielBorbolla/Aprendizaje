import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import ImagenCripton from './assets/img/imagen-criptos.png'
import Formulario from './Components/Formulario'
import Resultado from './Components/Resultado'
import Spinner from './Components/Spinner/Spinner'

const Contenedor = styled.div`
  max-width:900px;
  margin:0 auto;
  width:90%;
  @media (min-width: 990px){
    display:grid;
    grid-template-columns:repeat(2,1fr);
    column-gap:2rem;
  }

`
const Heading = styled.h1` 
  font-family: 'Lato', sans-serif;
  color:#FFF;
  text-align:center;
  font-weight:700;
  margin-top: 80px;
  margin-bottom:50px;
  font-size:34px;

  &::after {
    content: '';
    width:100px;
    height:6px;
    background-color:#66A2FE;
    display:block;
    margin:10px auto 0 auto;
  }

  `
const Imagen = styled.img`
  max-width:400px;
  width:80%;
  margin: 100px auto 0 auto;
  display:block;

`

function App() {
  const [monedas, setMonedas] = useState({})
  const [cotizacion, setCotizacion] = useState({})
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    if (monedas.moneda) {
      const cotizarCripto = async () => {
        setLoading(true)
        setCotizacion({})
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${monedas.criptomoneda}&tsyms=${monedas.moneda}`
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
        setCotizacion(resultado.DISPLAY[monedas.criptomoneda][monedas.moneda])
        setLoading(false)
      }
      cotizarCripto()
    }

  }, [monedas])
  return (
    <Contenedor>
      <Imagen
        src={ImagenCripton}
        alt='imagen criptomonedas'
      />
      <div>
        <Heading>Cotiza Criptomonedas al Instante</Heading>
        <Formulario
          setMonedas={setMonedas}
        />
        {loading && <Spinner />}
        {cotizacion.PRICE && <Resultado cotizacion={cotizacion} />}

      </div>

    </Contenedor>
  )
}

export default App
