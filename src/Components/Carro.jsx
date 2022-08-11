import React from "react";
import ImagemCarro from "../img/carro.jpg"
import ListCarro from "./ListCarro";

const Carro = () => {
  const carros = ["Ferrari", "Porshe", "Audi", "BMW", "Mercedes"]
  const subtitulo = "Carros"
  return (
    <>
      <img src={ImagemCarro} alt="Carro" width="500px"/>
      <ListCarro carros={carros} subtitulo={subtitulo}/>
    </>
  )
}

export default Carro;