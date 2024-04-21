import React from "react";
import './Button.css';

export default props => {
    const max = 50;
    const min = 20;
    const generateAge = () => parseInt(Math.floor((Math.random() * min) + max));
    const generateNerd = () => Math.random() > 0.5;
    return(
        <div>
            <div>Filho</div>
            <div className="div-button">
            <button className="original-button" onClick={
                e => props.click('João', generateAge(), generateNerd())
            }>Informações</button>
            </div>
          
        </div>
    )
}