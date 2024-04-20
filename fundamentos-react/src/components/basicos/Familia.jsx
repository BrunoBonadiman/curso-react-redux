import React from "react";
import FamiliaMembro from "./FamiliaMembro";

export default props => {
    return (
        <div>
            <FamiliaMembro nome="José" sobrenome="Antônio Ferreira"></FamiliaMembro>            
            <FamiliaMembro nome="Maria da Penha" sobrenome="Bertoli Bonadiman Ferreira"></FamiliaMembro>
            <FamiliaMembro nome="Franciele" sobrenome="Bonadiman Ferreira"></FamiliaMembro>
            <FamiliaMembro nome="Bruno" sobrenome="Bonadiman Ferreira"></FamiliaMembro>
            <FamiliaMembro nome="Luiz Gustavo" sobrenome="Ferreira Antunes"></FamiliaMembro>
        </div>
    )
}