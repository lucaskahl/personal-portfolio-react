import React, { Component } from "react";

import {
  Container,
  ProjectsWrapper,
  Information,
  Tecnologies,
  Overview
} from "./styles";

export default class Projects extends Component {
  render() {
    return (
      <Container>
        <h1>Projetos</h1>
        <ProjectsWrapper>
          <Information>
            <div>
              <h3>Personal Portfolio</h3>
              <div className="project__background" />
              <div className="project__actions">
                <a>Live Preview</a>
                <a>View Source</a>
              </div>
              <Tecnologies>
                <h3>Tecnologias usadas</h3>
                <ul>
                  <li>ReactJS</li>
                  <li>Styled Components</li>
                  <li>NodeJS</li>
                  <li>CSS3</li>
                  <li>HTML5</li>
                </ul>
              </Tecnologies>
            </div>
          </Information>
          <Overview>
            <h4>Overview</h4>
            <p>
              Simple React project to display my portfolio of work. It was built
              by me using React / Typescript
            </p>
          </Overview>
        </ProjectsWrapper>
      </Container>
    );
  }
}
