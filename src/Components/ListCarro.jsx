import React from "react";

const ListCarro = (props) => {
    return(
      <>
        <h2>{props.subtitulo}</h2>
        <ul>
          {props.carros.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </>
    )
}

export default ListCarro