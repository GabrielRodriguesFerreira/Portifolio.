import React from "react";
import style from "../../Styles/pageStart.module.css";
import Svgs from "Components/Svgs";
import Box from "Components/Effects/Box";

export default function PageStart() {
  return (
    <>
      <section>
        <div className={style.overlay}></div>
        <Svgs />
        <div className={style.divPrinc}>
          <h1 className={style.textPrinc}>
            Olá, me chamo Gabriel<span className={style.spanPonto}>.</span>
          </h1>
          <h2>
            Sou um <span className={style.frontEnd}>Front-End Developer</span>
          </h2>
          <h3>
            Nos últimos 2 anos, estive envolvido na área de desenvolvimento de
            software, colaborando com empresas que me empolgaram bastante. Este
            é o espaço onde apresento meus certificados, experiências e
            projetos.
            <span className={style.spanBemVindo}> Sejam muito Bem-Vindos!</span>
          </h3>
          <button>
            <a
              className={style.email}
              href="mailto:gabrielrferreira0306@gmail.com?subject=Assunto do email&cc=copia@provedor.com.br&bcc=copiaoculta@provedor.com.br&body=Conteúdo do email que será preenchido automaticamente"
            >
              Contato
            </a>
          </button>
        </div>
      </section>
    </>
  );
}
