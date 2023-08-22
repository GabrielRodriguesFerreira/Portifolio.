import React from "react";
import style from "../../Styles/exp.module.css";
import Svgs from "Components/Svgs";

export default function PageExp() {
  return (
    <>
      <section>
        <Svgs />
        <div className={style.divExp}>
          <div className={style.tituloExp}>
            <h1 className={style.textPrincExp}>
              Experiências<span className={style.spanPontoExp}>.</span>
            </h1>
            <svg xmlns="http://www.w3.org/2000/svg" className={style.linhaExp}>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1920 1.5H0V0.5H1920V1.5Z"
                fill="black"
              />
            </svg>
          </div>
          <div className={style.center}>
            <h2 className={style.h2Empresas}>Center - Norte</h2>
            <h3 className={style.H3Empresas}>2021 - 2021</h3>
          </div>
          <div className={style.cargoEmpresa}>
            <h3 className={style.cargo}>Empacotador</h3>
            <h3 className={style.cidade}>Pato - Branco</h3>
          </div>
          <div className={style.viasoftAprendiz}>
            <h2 className={style.h2Empresasviasoft}>
              Viasoft Informática - LTDA
            </h2>
            <h3 className={style.H3Empresas}>2021 - 2023</h3>
          </div>
          <div className={style.cargoEmpresa}>
            <h3 className={style.cargo}>Auxiliar Administrativo</h3>
            <h3 className={style.cidade}>Pato - Branco</h3>
          </div>
          <div className={style.viasoftTeste}>
            <h2 className={style.h2Empresasviasoft}>
              Viasoft Informática - LTDA
            </h2>
            <h3 className={style.H3Empresas}>2023 - Atual</h3>
          </div>
          <div className={style.cargoEmpresa}>
            <h3 className={style.cargo}>Analista de Testes</h3>
            <h3 className={style.cidade}>Pato - Branco</h3>
          </div>
        </div>
      </section>
    </>
  );
}
