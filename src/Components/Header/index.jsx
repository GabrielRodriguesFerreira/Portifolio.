import React from "react";
import style from "../Styles/header.module.css";

export default function Header() {
  return (
    <>
      <nav className={style.nav}>
        <span className={style.g}>
          G<span className={style.ponto}>.</span>
        </span>
        <div className={style.itens}>
          <a href="#SobreMim" className={style.a}>
            Sobre Mim
          </a>
          <a href="#Projetos" className={style.a}>
            Projetos
          </a>
          <a href="#Esperiencia" className={style.a}>
            Experiências
          </a>
          <a href="#Contatos" className={style.a}>
            Contatos
          </a>
        </div>
      </nav>
    </>
  );
}
