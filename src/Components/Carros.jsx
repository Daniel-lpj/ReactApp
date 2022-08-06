import React from "react";
import ImagemCarro from "../img/carro.jpg"

const Carros = () => {
    return (
        <>
            <img src={ImagemCarro} alt="Carro" width="500px"/>
            <ul>
                <li>BMW</li>
                <li>Mercedes</li>
                <li>Porshe</li>
                <li>Ferrari</li>
                <li>Lamborguini</li>
            </ul>
        </>
    )
}

export default Carros;