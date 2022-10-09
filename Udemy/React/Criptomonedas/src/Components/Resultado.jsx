import React from 'react'
import styled from '@emotion/styled'

const Mostrar = styled.div`
  color: white;
  font-family:'Lato',sans-serif;
  display:flex;
  align-items:center;
  gap:1rem;
  margin-top: 10px;
  margin-bottom:50px;



`
const Imagen = styled.img`
  display:block;
  width:150px;

`
const Texto = styled.p`
  font-size:18px;
  span{
    font-weight:700;
  }

`
const Precio = styled.p`
  font-size:30px;
  span{
    font-weight:700;
  }


`
const Resultado = ({ cotizacion }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = cotizacion
  return (
    <Mostrar>
      <Imagen src={`https://www.cryptocompare.com/${IMAGEURL}`} alt="imagen de criptomonadas" />
      <div>
        <Precio>El Precio es de: <span>{PRICE}</span></Precio>
        <Texto>Precio Máximo del Dia: <span>{HIGHDAY}</span></Texto>
        <Texto>Precio Mínimo del Día: <span>{LOWDAY}</span></Texto>
        <Texto>Variación Último Día: <span>{CHANGEPCT24HOUR}</span></Texto>
        <Texto>Última Actualización: <span>{LASTUPDATE}</span></Texto>
      </div>
    </Mostrar>
  )
}

export default Resultado
