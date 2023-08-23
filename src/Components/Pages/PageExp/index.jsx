import React from "react";
import style from "../../Styles/exp.module.css";
import Svgs from "Components/Svgs";
import { Col, Container, Row } from "react-bootstrap";

export default function PageExp() {
  return (
    <>
      <Svgs />
      <div className={style.exp__div}>
        <h1 className={style.exp__h1}>
          Experiências<span className={style.exp__span}>.</span>
          <svg xmlns="http://www.w3.org/2000/svg" className={style.exp__linha}>
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M1920 1.5H0V0.5H1920V1.5Z"
              fill="black"
            />
          </svg>
        </h1>
      </div>
      <Container className={style.exp__container}>
        <Row className={style.exp__linhas}>
          <Col md={2} sm={2}>
            <h2 className={style.exp__h2}>Center - Norte</h2>
          </Col>
          <Col>
            <h4 className={style.exp__h3}>Pato - Branco</h4>
          </Col>
        </Row>
        <Row className={style.exp__linhas}>
          <Col md={2} sm={2}>
            <h2 className={style.exp__h2__cargo}>Empacotador</h2>
          </Col>
          <Col>
            <h3 className={style.exp__h3}>2021 - 2021</h3>
          </Col>
        </Row>
        <Row className={style.exp__linhas}>
          <Col md={2} sm={2}>
            <h2 className={style.exp__h2__viasoft}>
              Viasoft Informática - LTDA
            </h2>
          </Col>
          <Col>
            <h3 className={style.exp__h3}>Pato - Branco</h3>
          </Col>
        </Row>
        <Row className={style.exp__linhas}>
          <Col md={2} sm={2}>
            <h2 className={style.exp__h2__cargo}>Auxiliar Administrativo</h2>
          </Col>
          <Col>
            <h3 className={style.exp__h3}>2021 - 2023</h3>
          </Col>
        </Row>
        <Row className={style.exp__linhas}>
          <Col md={2} sm={2}>
            <h2 className={style.exp__h2__viasoft}>
              Viasoft Informática - LTDA
            </h2>
          </Col>
          <Col>
            <h3 className={style.exp__h3}>Pato - Branco</h3>
          </Col>
        </Row>
        <Row className={style.exp__linhas}>
          <Col md={2} sm={2}>
            <h2 className={style.exp__h2__cargo}>Analista de Testes</h2>
          </Col>
          <Col>
            <h3 className={style.exp__h3}>2023 - Atual</h3>
          </Col>
        </Row>
      </Container>
    </>
  );
}
