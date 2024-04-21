import React from "react";
import produtos from "../../data/produtos";
import "./TabelaProdutos.css";

export default () => {
  function getLinhas() {
    return produtos.map((x, i) => {
      return (
        <tr key={x.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
          <td>{x.id}</td>
          <td>{x.descricao}</td>
          <td>R${x.precoVenda.toFixed(2).replace(".", ",")}</td>
        </tr>
      );
    });
  }

  return (
    <div className="TabelaProdutos">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Descrição</th>
            <th>Preço de Venda</th>
          </tr>
        </thead>
        <tbody>{getLinhas()}</tbody>
      </table>
    </div>
  );
};
