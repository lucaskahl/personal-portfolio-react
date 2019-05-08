import React, { Component } from "react";

import { Container, Wrapper, Informations, Details, Modal } from "./styles";

class About extends Component {
  state = {
    informations: [
      {
        id: 1,
        title: "Whats sets me apart ?",
        subtitle: "Whats set me apart from other junior developers",
        text:
          "I strive to solve solutions by attacking the prolem at its core. I enjoy a nice coding challenge because I am always learning new things. And I also love the ability to breeze through problems which I've already found prior solutions to."
      }
    ]
  };

  render() {
    const { informations } = this.state;

    return (
      <Container>
        <Informations>
          <h2>Informações sobre mim</h2>
          <ol>
            {informations.map(information => (
              <li key={information.id}>{information.title}</li>
            ))}
          </ol>
        </Informations>
        <Details>
          {informations.map(information => (
            <Modal key={information.id}>
              <h2>{information.subtitle}</h2>
              <p>{information.text}</p>
            </Modal>
          ))}
        </Details>
      </Container>
    );
  }
}

export default About;
