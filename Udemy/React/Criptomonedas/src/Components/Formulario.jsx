import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Error from './Error'
import useSelectMonedas from '../Hooks/useSelectMonedas'
import { monedas } from '../Data/monedas'

const InputSubmit = styled.input`
  background-color:#9497ff;
  border:none;
  width:100%;
  padding:10px;
  color:#fff;
  font-weight:700;
  text-transform:uppercase;
  font-size:20px;
  border-radius: 5px;
  transition:background-color .3s ease;
  margin-top:30px;
  &:hover {
    background-color:#7a7dfe;
    cursor: pointer;
  }


`
const Formulario = ({ setMonedas }) => {
  const [cripton, setCripton] = useState([])
  const [error, setError] = useState(false)
  const [moneda, SelectMonedas] = useSelectMonedas('Elige tu Mierda', monedas)
  const [listaCripto, SelectListaCripto] = useSelectMonedas('Elige la Criptomoneda', cripton)


  useEffect(() => {

    const consultarAPI = async () => {
      const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      const arrayCripto = resultado.Data.map(cripto => {
        const objeto = {
          id: cripto.CoinInfo.Name,
          nombre: cripto.CoinInfo.FullName,

        }
        return objeto

      })
      setCripton(arrayCripto)
    }
    consultarAPI();
  }, [])

  const handleSubmit = e => {
    e.preventDefault()
    if ([moneda, listaCripto].includes('')) {
      setError(true)
      return
    }
    setError(false)
    setMonedas({
      moneda: moneda,
      criptomoneda: listaCripto,

    })

  }
  return (
    <>
      {error && <Error>Todos los Campos Son Obligatorios</Error>}
      <form onSubmit={handleSubmit}>
        <SelectMonedas />
        <SelectListaCripto />
        <InputSubmit
          type="submit"
          value='cotizar'
        />

      </form>
      <img />
    </>
  )
}

export default Formulario
