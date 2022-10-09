import React from "react";
import "../style-shits/Testimonio.css"

export function Testimonio(props) {
  return (
    <div  className="contenedor-testimonio">
      <img className="imagen-testimonio"
        src={require(`../img/${props.imagen}.png`)}
        alt={`foto de ${props.nombre}`} />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">
          <strong>
          {props.nombre}
          </strong> in {props.pais}</p>
        <p className="cargo-testimonio">
          {props.puesto} at <strong>
          {props.empresa}
          </strong>
        </p>
        <p className="texto-testimonio">"{props.testimonio}"</p>
      </div>


    </div>
  );   
}

