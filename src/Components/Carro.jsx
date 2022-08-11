import React from "react";
import ImagemCarro from "../img/carro.jpg"
import ListCarro from "./ListCarro";

const Carro = () => {
  const carros = ["Ferrari", "Porshe", "Audi", "BMW", "Mercedes"]
  return (
    <>
      <img src={ImagemCarro} alt="Carro" width="500px"/>
      <ListCarro props={carros}/>
    </>
  )
}

export default Carro;