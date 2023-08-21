import React from "react";
import style from "../../Styles/projects.module.css";
import image1 from "../../images/image-1.svg";
import image2 from "../../images/image-4.svg";
import image3 from "../../images/image-3.svg";
import image4 from "../../images/image-2.svg";
import Svgs from "Components/Svgs";

export default function Projects() {
  return (
    <>
      <section>
        <Svgs />
        <div className={style.secprinc}>
          <div className={style.tituloProjeto}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={style.linhaProjetos}
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1920 1.5H0V0.5H1920V1.5Z"
                fill="black"
              />
            </svg>
            <h1 className={style.textPrincProjetos}>
              Projetos<span className={style.spanPontoProjetos}>.</span>
            </h1>
          </div>
          <div className={style.projetos1}>
            <div className={style.divimg1}>
              <img className={style.imagens} src={image1} />

              <div className={style.estiloTitulo}>
                <h1 className={style.titulosLinguages2}>Chat - Bot</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={style.linhas3}
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1920 1.5H0V0.5H1920V1.5Z"
                    fill="black"
                  />
                </svg>
                <a
                  href="https://github.com/GabrielRodriguesFerreira/Chat-Bot-IR"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={style.git3}
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 0.5C15.523 0.5 20 5.08992 20 10.7529C20 15.2819 17.138 19.1239 13.167 20.4809C12.66 20.5819 12.48 20.2617 12.48 19.9887C12.48 19.6507 12.492 18.5468 12.492 17.1748C12.492 16.2188 12.172 15.5948 11.813 15.2768C14.04 15.0228 16.38 14.1558 16.38 10.2178C16.38 9.09776 15.992 8.18381 15.35 7.46581C15.454 7.20681 15.797 6.16395 15.252 4.75195C15.252 4.75195 14.414 4.47722 12.505 5.80322C11.706 5.57622 10.85 5.462 10 5.458C9.15 5.462 8.295 5.57622 7.497 5.80322C5.586 4.47722 4.746 4.75195 4.746 4.75195C4.203 6.16395 4.546 7.20681 4.649 7.46581C4.01 8.18381 3.619 9.09776 3.619 10.2178C3.619 14.1458 5.954 15.0261 8.175 15.2851C7.889 15.5411 7.63 15.9927 7.54 16.6557C6.97 16.9177 5.522 17.3712 4.63 15.8042C4.63 15.8042 4.101 14.8191 3.097 14.7471C3.097 14.7471 2.122 14.7341 3.029 15.3701C3.029 15.3701 3.684 15.6851 4.139 16.8701C4.139 16.8701 4.726 18.7001 7.508 18.0801C7.513 18.9371 7.522 19.7447 7.522 19.9887C7.522 20.2597 7.338 20.5769 6.839 20.4819C2.865 19.1269 0 15.2829 0 10.7529C0 5.08992 4.478 0.5 10 0.5Z"
                      fill="#565252"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className={style.divimg2}>
              <img className={style.imagens} src={image2} />
              <div className={style.estiloTitulo}>
                <h1 className={style.titulosLinguages1}>HTML</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={style.linhas2}
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1920 1.5H0V0.5H1920V1.5Z"
                    fill="black"
                  />
                </svg>
                <a
                  href="https://github.com/GabrielRodriguesFerreira/Site-Singapura"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={style.git2}
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 0.5C15.523 0.5 20 5.08992 20 10.7529C20 15.2819 17.138 19.1239 13.167 20.4809C12.66 20.5819 12.48 20.2617 12.48 19.9887C12.48 19.6507 12.492 18.5468 12.492 17.1748C12.492 16.2188 12.172 15.5948 11.813 15.2768C14.04 15.0228 16.38 14.1558 16.38 10.2178C16.38 9.09776 15.992 8.18381 15.35 7.46581C15.454 7.20681 15.797 6.16395 15.252 4.75195C15.252 4.75195 14.414 4.47722 12.505 5.80322C11.706 5.57622 10.85 5.462 10 5.458C9.15 5.462 8.295 5.57622 7.497 5.80322C5.586 4.47722 4.746 4.75195 4.746 4.75195C4.203 6.16395 4.546 7.20681 4.649 7.46581C4.01 8.18381 3.619 9.09776 3.619 10.2178C3.619 14.1458 5.954 15.0261 8.175 15.2851C7.889 15.5411 7.63 15.9927 7.54 16.6557C6.97 16.9177 5.522 17.3712 4.63 15.8042C4.63 15.8042 4.101 14.8191 3.097 14.7471C3.097 14.7471 2.122 14.7341 3.029 15.3701C3.029 15.3701 3.684 15.6851 4.139 16.8701C4.139 16.8701 4.726 18.7001 7.508 18.0801C7.513 18.9371 7.522 19.7447 7.522 19.9887C7.522 20.2597 7.338 20.5769 6.839 20.4819C2.865 19.1269 0 15.2829 0 10.7529C0 5.08992 4.478 0.5 10 0.5Z"
                      fill="#565252"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className={style.projetos2}>
            <div className={style.divimg3}>
              <img className={style.imagens} src={image3} />

              <div className={style.estiloTitulo}>
                <h1 className={style.titulosLinguages}>Python</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={style.linhas1}
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1920 1.5H0V0.5H1920V1.5Z"
                    fill="black"
                  />
                </svg>
                <a
                  href="https://github.com/GabrielRodriguesFerreira/Automatizador-de-Testes"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={style.git1}
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 0.5C15.523 0.5 20 5.08992 20 10.7529C20 15.2819 17.138 19.1239 13.167 20.4809C12.66 20.5819 12.48 20.2617 12.48 19.9887C12.48 19.6507 12.492 18.5468 12.492 17.1748C12.492 16.2188 12.172 15.5948 11.813 15.2768C14.04 15.0228 16.38 14.1558 16.38 10.2178C16.38 9.09776 15.992 8.18381 15.35 7.46581C15.454 7.20681 15.797 6.16395 15.252 4.75195C15.252 4.75195 14.414 4.47722 12.505 5.80322C11.706 5.57622 10.85 5.462 10 5.458C9.15 5.462 8.295 5.57622 7.497 5.80322C5.586 4.47722 4.746 4.75195 4.746 4.75195C4.203 6.16395 4.546 7.20681 4.649 7.46581C4.01 8.18381 3.619 9.09776 3.619 10.2178C3.619 14.1458 5.954 15.0261 8.175 15.2851C7.889 15.5411 7.63 15.9927 7.54 16.6557C6.97 16.9177 5.522 17.3712 4.63 15.8042C4.63 15.8042 4.101 14.8191 3.097 14.7471C3.097 14.7471 2.122 14.7341 3.029 15.3701C3.029 15.3701 3.684 15.6851 4.139 16.8701C4.139 16.8701 4.726 18.7001 7.508 18.0801C7.513 18.9371 7.522 19.7447 7.522 19.9887C7.522 20.2597 7.338 20.5769 6.839 20.4819C2.865 19.1269 0 15.2829 0 10.7529C0 5.08992 4.478 0.5 10 0.5Z"
                      fill="#565252"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div className={style.divimg4}>
              <img className={style.imagens} src={image4} />

              <div className={style.estiloTitulo}>
                <h1 className={style.titulosLinguages}>JavaScript</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={style.linhas}
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1920 1.5H0V0.5H1920V1.5Z"
                    fill="black"
                  />
                </svg>
                <a
                  href="https://github.com/GabrielRodriguesFerreira/Projetos-Trabalho-Java"
                  target="_blank"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className={style.git}>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 0.5C15.523 0.5 20 5.08992 20 10.7529C20 15.2819 17.138 19.1239 13.167 20.4809C12.66 20.5819 12.48 20.2617 12.48 19.9887C12.48 19.6507 12.492 18.5468 12.492 17.1748C12.492 16.2188 12.172 15.5948 11.813 15.2768C14.04 15.0228 16.38 14.1558 16.38 10.2178C16.38 9.09776 15.992 8.18381 15.35 7.46581C15.454 7.20681 15.797 6.16395 15.252 4.75195C15.252 4.75195 14.414 4.47722 12.505 5.80322C11.706 5.57622 10.85 5.462 10 5.458C9.15 5.462 8.295 5.57622 7.497 5.80322C5.586 4.47722 4.746 4.75195 4.746 4.75195C4.203 6.16395 4.546 7.20681 4.649 7.46581C4.01 8.18381 3.619 9.09776 3.619 10.2178C3.619 14.1458 5.954 15.0261 8.175 15.2851C7.889 15.5411 7.63 15.9927 7.54 16.6557C6.97 16.9177 5.522 17.3712 4.63 15.8042C4.63 15.8042 4.101 14.8191 3.097 14.7471C3.097 14.7471 2.122 14.7341 3.029 15.3701C3.029 15.3701 3.684 15.6851 4.139 16.8701C4.139 16.8701 4.726 18.7001 7.508 18.0801C7.513 18.9371 7.522 19.7447 7.522 19.9887C7.522 20.2597 7.338 20.5769 6.839 20.4819C2.865 19.1269 0 15.2829 0 10.7529C0 5.08992 4.478 0.5 10 0.5Z"
                      fill="#565252"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
