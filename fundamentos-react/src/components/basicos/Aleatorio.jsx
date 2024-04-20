import React from "react";

export default props => {
    const { min, max } = props;
    const numeroAleatorio = Math.floor((Math.random() * max) + min);
    return(
        <>
            <h1>Número aleatório</h1>
            <p><strong>Valor Mínimo: </strong> { min } </p>
            <p><strong>Valor Máximo: </strong> { max }</p>
            <p><strong>Valor Escolhido: </strong> { numeroAleatorio } </p>
        </>
    )
}