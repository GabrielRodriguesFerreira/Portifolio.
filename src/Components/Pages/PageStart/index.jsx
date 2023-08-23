import React from "react";
import style from "../../Styles/pageStart.module.css";
import Svgs from "Components/Svgs";
import ContactApp from "../PageContactApp";

export default function PageStart() {
  return (
    <>
      <section>
        <Svgs />
        <div className={style.divPrincStart}>
          <h1 className={style.textPrincStart}>
            Olá, me chamo Gabriel<span className={style.spanPontoStart}>.</span>
          </h1>
          <h2 className={style.h2frontStart}>
            Sou um {""}
            <span className={style.frontEndStart}>Front-End Developer</span>
          </h2>
          <h3 className={style.h3frontStart}>
            Nos últimos 2 anos, estive envolvido na área de desenvolvimento de
            software, colaborando com empresas que me empolgaram bastante. Este
            é o espaço onde apresento meus certificados, experiências e
            projetos.{" "}
            <span className={style.spanBemVindoStart}>
              Sejam muito Bem-Vindos!
            </span>
          </h3>
          <button className={style.botaoStart}>
            <a className={style.emailStart} href={<ContactApp />}>
              Contato
            </a>
          </button>
        </div>
      </section>
    </>
  );
}
