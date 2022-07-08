import React from "react";
import styles from "./Pessoa.module.css";

export default function Pessoa({ foto, nome, profissao, idade }) {
  return (
      <div className={styles.pessoaContainer}>
        <img className={styles.ImagemPessoa} src={foto} alt={nome} />
        <h2 className={styles.SegundoTituloPessoa}>Nome: {nome}</h2>
        <p className={styles.ParagrafoPessoa}>Idade: {idade}</p>
        <p className={styles.ParagrafoPessoa}>Profissão: {profissao}</p>
    </div>
  );
}
