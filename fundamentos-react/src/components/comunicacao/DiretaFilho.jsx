import React from "react";

export default (props) => {
  return (
    <div>
      <div>
        {props.nome} - <strong>{props.idade}</strong> -{" "}
        {props.nerd ? "Verdadeiro" : "Falso"}
      </div>
    </div>
  );
};
