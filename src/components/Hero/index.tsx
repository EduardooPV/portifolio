import React from "react";
import { TextSection } from "../TextSection";
import { ButtonGeneric } from "../ButtonGeneric";

import {
  Container,
  Content,
  BackHome,
  Figure,
  ContainerButton,
} from "./styles";
import { Media } from "../MediaScreen";

export function Hero() {
  return (
    <Container id="hero">
      <Content>
        <BackHome>
          <a href="#">
            <svg
              width="43"
              height="43"
              viewBox="0 0 43 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.3918 21.1775L15.4634 19.249L21.2488 13.4636L27.0342 19.249L25.1057 21.1775L22.6122 18.684L22.6122 28.9628L19.8853 28.9628L19.8853 18.684L17.3918 21.1775Z" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.85688 17.3563C2.83395 18.3792 2.25928 19.7666 2.25928 21.2132C2.25928 22.6598 2.83395 24.0472 3.85688 25.0701L17.3562 38.5695C18.3791 39.5924 19.7665 40.1671 21.2131 40.1671C22.6598 40.1671 24.0472 39.5924 25.0701 38.5695L38.5694 25.0701C39.5923 24.0472 40.167 22.6598 40.167 21.2132C40.167 19.7666 39.5923 18.3792 38.5694 17.3563L25.0701 3.85695C24.0472 2.83402 22.6598 2.25935 21.2131 2.25935C19.7665 2.25935 18.3791 2.83402 17.3562 3.85695L3.85688 17.3563ZM5.78535 23.1417L19.2847 36.641C19.7961 37.1525 20.4898 37.4398 21.2131 37.4398C21.9365 37.4398 22.6301 37.1525 23.1416 36.641L36.6409 23.1417C37.1524 22.6302 37.4397 21.9365 37.4397 21.2132C37.4397 20.4899 37.1524 19.7962 36.6409 19.2847L23.1416 5.78542C22.6301 5.27396 21.9365 4.98662 21.2131 4.98662C20.4898 4.98662 19.7961 5.27396 19.2847 5.78542L5.78535 19.2847C5.27389 19.7962 4.98655 20.4899 4.98655 21.2132C4.98655 21.9365 5.27389 22.6302 5.78535 23.1417Z"
              />
            </svg>
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
      <Media greaterThan="sm">
        <Figure>
          <img src="/assets/ilustration.png" alt="Ilustração" />
        </Figure>
      </Media>
    </Container>
  );
}
