import React from "react";

import { Container, Contacts } from "./styles";

const Footer = () => (
  <Container>
    <h3>Obrigado</h3>
    <p>Qualquer dúvida entre em contato :)</p>

    <Contacts>
      <ul>
        <li>
          <a target="_blank" href="https://www.linkedin.com/in/lucaskahl/">
            Linkedin
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/lucaskahl">
            Github
          </a>
        </li>
        <li>
          <a href="https://medium.com/@lucaschangkahl">Blog</a>
        </li>
        <li>
          <a href="mailto:lucaschangkahl@gmail.com">Email</a>
        </li>
        <li>
          <a>Resume</a>
        </li>
      </ul>
    </Contacts>
  </Container>
);

export default Footer;
