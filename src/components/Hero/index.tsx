import React from "react";
import { TextSection } from "../TextSection";
import { ButtonGeneric } from "../ButtonGeneric";
import { useWidth } from "../../utils/useWidth";

import { Container, Content, BackHome, Figure, ContainerButton } from "./styles";

import BackImg from "../../assets/back.svg";
import Fig from "../../assets/fig01.png";

export function Hero() {
  const width = useWidth();

  return (
    <Container>
      <Content>
        <BackHome>
          <a href="#">
            <img src={BackImg.src} alt="Voltar para o ínicio" />
          </a>
        </BackHome>

        <TextSection tag="<h1>">Seja bem vindo</TextSection>

        <p>
          lorem ipsum lorem ipsore color dolor asudhw
          <span> ai et dolor lorem </span>ipsumlorem ipsum lorem ipsore color
          dolor asudhw ai et dolor lorem ipsumlorem ipsum lorem ipsore color
          dolor <span>asudhw ai et dolor lorem ipsumlorem</span> ipsum lorem
          ipsore color dolor asudhw dolor asudhw ai et dolor lorem m ipsore
          color dolor asudhw <span>dolor asudhw</span> ai et dolor lorem{" "}
        </p>

        <ContainerButton>
          <ButtonGeneric>Entre em contato</ButtonGeneric>

          <ButtonGeneric invisible>Sobre mim</ButtonGeneric>
        </ContainerButton>
      </Content>
      {width >= 768 ? 
        <Figure>
          <img src={Fig.src} alt="Ilustração" />
        </Figure> 
      : null}
    </Container>
  );
}
