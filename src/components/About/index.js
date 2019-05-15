import React, { Component } from "react";

import { Container, Informations, Details, Modal } from "./styles";

class About extends Component {
  render() {
    return (
      <Container id="about">
        <Informations>
          <img src="https://avatars0.githubusercontent.com/u/36921642?s=400&u=c711a1c771e518c6cb035355ae01d2b5b612b39e&v=4" />
        </Informations>
        <Details>
          <Modal>
            <h2>Hey friends, how are you ?</h2>
            <p>
              My name is Lucas Kahl from Brazil, I've been working as Front-End
              Developer since 2017. Currently. Currently i'm working at iCasei.
              I love code cool stuffs :-).
            </p>
          </Modal>
        </Details>
      </Container>
    );
  }
}

export default About;
