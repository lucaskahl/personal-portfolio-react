import React, { Component } from "react";

import { Container, ProjectsWrapper, Information, Overview } from "./styles";

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
              <div>
                <p>Tecnologias usadas</p>
                <ul>
                  <li>ReactJS</li>
                  <li>Styled Components</li>
                  <li>NodeJS</li>
                  <li>CSS3</li>
                  <li>HTML5</li>
                </ul>
              </div>
            </div>
          </Information>
          <Overview>
            <h4>Overview</h4>
            <p>Simple asdasdasdasd</p>
          </Overview>
        </ProjectsWrapper>
      </Container>
    );
  }
}
