import React from "react";

const ListCarro = (props) => {
    return(
      <>
        <h2>{props.subtitulo}</h2>
        <ul>
          {props.carros.map((carro, index) => (
            <li key={index}>{carro}</li>
          ))}
        </ul>
      </>
    )
}

export default ListCarro