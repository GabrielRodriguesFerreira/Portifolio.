import React from "react";
import style from "../Styles/headerExp.module.css";

export default function HeaderExp() {
  return (
    <>
      <nav className={style.nav}>
        <a href="/" className={style.g}>
          <span className={style.g}>
            G<span className={style.ponto}>.</span>
          </span>
        </a>
        <div className={style.itens}>
          <a href="/SobreMim" className={style.a}>
            Sobre Mim
          </a>
          <a href="/Projetos" className={style.a}>
            Projetos
          </a>
          <a href="/Experiencia" className={style.a}>
            Experiências
          </a>
          <a href="/Contatos" className={style.a}>
            Contatos
          </a>
        </div>
      </nav>
    </>
  );
}
