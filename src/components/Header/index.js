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
  </HeaderContainer>
);

export default Header;
