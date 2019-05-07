import React, { Component } from "react";

import { Container, Informations, Details, Modal } from "./styles";

class About extends Component {
  state = {
    hide: false,
    active: true,
    show: false
  };

  handleClick = () => {
    this.setState(prevState => ({
      hide: !prevState.hide,
      active: !prevState.active,
      show: prevState.hide
    }));
  };

  render() {
    const { hide, show, active } = this.state;

    return (
      <Container>
        <Informations>
          <h2>Informações sobre mim</h2>
          <ol>
            <li status={active} onClick={this.handleClick}>
              O que me diferencia
            </li>
            <li>Praticas de código</li>
          </ol>
        </Informations>
        <Details>
          <Modal hide={hide}>
            <h2>O que me diferencia de outros programadores ?</h2>
            <p>
              I strive to solve solutions by attacking the prolem at its core. I
              enjoy a nice coding challenge because I am always learning new
              things. And I also love the ability to breeze through problems
              which I've already found prior solutions to.
            </p>
          </Modal>
          <Modal hide={show}>
            <h2>O que me diferencia de outros programadores ?</h2>
            <p>
              I strive to solve solutions by attacking the prolem at its core. I
              enjoy a nice coding challenge because I am always learning new
              things. And I also love the ability to breeze through problems
              which I've already found prior solutions to.
            </p>
          </Modal>
        </Details>
      </Container>
    );
  }
}

export default About;
