import React from "react";

import {
  HeaderContainer,
  Menu,
  Title,
  List,
  Item,
  Link,
  Container,
  Informations,
  Contacts
} from "./styles";

const Header = () => (
  <HeaderContainer>
    <Menu>
      <Title>
        Lucas<span>Kahl</span>
      </Title>
      <List>
        <Item>
          <Link href="#">Teconologias</Link>
        </Item>
        <Item>
          <Link href="#about">Sobre mim</Link>
        </Item>
        <Item>
          <Link href="#projects">Projetos</Link>
        </Item>
        <Item>
          <Link href="#">Blog</Link>
        </Item>
      </List>
    </Menu>
    <Container>
      <Informations>
        <h1>Front-end Software Engineer</h1>
        <h5>São Paulo</h5>
      </Informations>
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
  </HeaderContainer>
);

export default Header;
