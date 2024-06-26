import React from "react";

// import estilo
import "./App.css";

// imports dos components
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Card from "./components/layout/Card";
import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";

export default () => (
  <div className="app">
    <h1>Fundamentos de React!</h1>

    <div className="cards">
      <Card titulo="#10 - Comunicação Indireta" color="#4AAAA5">
        <IndiretaPai></IndiretaPai>
      </Card>

      <Card titulo="#09 - Comunicação Direta" color="#59323C">
        <DiretaPai></DiretaPai>
      </Card>

      <Card titulo="#08 - Renderização Condicional" color="#982395">
        <ParOuImpar numero={21}></ParOuImpar>
        <UsuarioInfo usuario={{ nome: "Bruno" }}></UsuarioInfo>
        <UsuarioInfo
          usuario={{ email: "brunobonadiman2@gmail.com" }}
        ></UsuarioInfo>
      </Card>

      <Card titulo="#07 - Desafio Repetição" color="#75EB00">
        <TabelaProdutos></TabelaProdutos>
      </Card>

      <Card titulo="#06 - Repetição" color="#FF4C65">
        <ListaAlunos></ListaAlunos>
      </Card>

      <Card titulo="#05 - Componente com Filhos" color="#00C8F8">
        <Familia sobrenome="Ferreira">
          <FamiliaMembro nome="José Antônio"></FamiliaMembro>
          <FamiliaMembro nome="Maria da Penha Bertoli Bonadiman"></FamiliaMembro>
          <FamiliaMembro nome="Franciele Bonadiman"></FamiliaMembro>
          <FamiliaMembro nome="Bruno Bonadiman "></FamiliaMembro>
          <FamiliaMembro nome="Luiz Gustavo"></FamiliaMembro>
        </Familia>
      </Card>

      <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
        <Aleatorio min={0} max={100} />
      </Card>

      <Card titulo="#03 - Fragmento" color="#E94C6F">
        <Fragmento />
      </Card>

      <Card titulo="#02 - Com Parâmetro" color="#E8B71A">
        <ComParametro
          titulo="Situação do Aluno"
          aluno="Pedro"
          nota={9.3}
        ></ComParametro>
      </Card>

      <Card titulo="#01 - Primeiro Componente" color="#588C73">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
