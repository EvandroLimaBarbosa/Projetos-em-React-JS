import React from "react";

export default function Saudacao({ nome }) {
  function gerarSaudacao(algumNome) {
    return `Olá ${algumNome}, tudo bem ?`;
  }
  return (
    <>
      {nome && <p>{gerarSaudacao(nome)}</p>}
    </>
  );
}
