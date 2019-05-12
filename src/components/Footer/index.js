import React from "react";

import { Container, Contacts } from "./styles";

const Footer = () => (
  <Container>
    <h3>Obrigado</h3>
    <p>Qualquer dúvida entre em contato :)</p>

    <Contacts>
      <ul>
        <li>
          <a href="#">Linkedin</a>
        </li>
        <li>
          <a href="#">Github</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Email</a>
        </li>
        <li>
          <a href="#">Resume</a>
        </li>
      </ul>
    </Contacts>
  </Container>
);

export default Footer;
