import React from "react";
import alunos from "../../data/alunos";

export default () => {
  const ListaAlunos = alunos.map((x) => {
    const status = x.nota >= 7 ? "Aprovado" : "Reprovado";
    return (
      <li key={x.id}>
        {x.id}) {x.nome} - {x.nota} / {status}
      </li>
    );
  });

  return (
    <div>
      <ul style={{ listStyle: 'none'}}>{ListaAlunos}</ul>
    </div>
  );
};
