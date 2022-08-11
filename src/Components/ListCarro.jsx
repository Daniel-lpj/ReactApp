import React from "react";

const ListCarro = (props) => {
    return(
        <ul>
          {props.props.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
    )
}

export default ListCarro