import React from "react";

import { Container, Informations } from "./styles";

const About = () => (
  <Container>
    <Informations>
      <h2>Informações sobre mim</h2>
      <ol>
        <li className="active">O que me diferencia</li>
        <li className="no-active">Praticas de código</li>
      </ol>
    </Informations>
    <div>blablabla</div>
  </Container>
);

export default About;
