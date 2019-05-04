import React from "react";

import { Container, Menu, Title, List, Item, Link } from "./styles";

const Header = () => (
  <Container>
    <Menu>
      <Title>
        Lucas<span>Kahl</span>
      </Title>
      <List>
        <Item>
          <Link href="#">Teconologias</Link>
        </Item>
        <Item>
          <Link href="#">Sobre mim</Link>
        </Item>
        <Item>
          <Link href="#">Projetos</Link>
        </Item>
        <Item>
          <Link href="#">Blog</Link>
        </Item>
      </List>
    </Menu>
  </Container>
);

export default Header;
