import React from "react";

import { Container, Informations, Details } from "./styles";

const About = () => (
  <Container>
    <Informations>
      <h2>Informações sobre mim</h2>
      <ol>
        <li className="active">O que me diferencia</li>
        <li className="no-active">Praticas de código</li>
      </ol>
    </Informations>
    <Details>
      <h2>O que me diferencia de outros programadores ?</h2>
      <p>
        I strive to solve solutions by attacking the prolem at its core. I enjoy
        a nice coding challenge because I am always learning new things. And I
        also love the ability to breeze through problems which I've already
        found prior solutions to.
      </p>
    </Details>
  </Container>
);

export default About;
