import React from "react";
import style from "../../Styles/contact.module.css";
import { Container } from "react-bootstrap";
import Svgs from "Components/Svgs";

export default function Contact() {
  return (
    <>
      <Svgs />
      <Container className={style.contact__container}>
        <h1 className={style.contact__h1}>
          Contato<span className={style.contact__span}>.</span>
        </h1>
        <h2 className={style.contact__h2}>
          Me envie um e-mail! Você também pode me encontrar no{" "}
          <a
            className={style.contact__a}
            href="https://www.linkedin.com/in/gabriel-r-88b786204"
          >
            <span className={style.contact__span__link}>LinkedIn</span>
          </a>
          , caso prefira essa plataformas
        </h2>
        <h3 className={style.contact__h3}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={style.contact__svg}
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1.83333 0L0.5 1.33333V22.6667L1.83333 24H31.1667L32.5 22.6667V1.33333L31.1667 0H1.83333ZM3.16667 4.34756V21.3333H29.8333V4.34711L16.4998 16.4686L3.16667 4.34756ZM27.7176 2.66667H5.28197L16.4998 12.8647L27.7176 2.66667Z"
              fill="#00E833"
            />
          </svg>
          gabrielrferreira0306@gmail.com
        </h3>
      </Container>
    </>
  );
}
