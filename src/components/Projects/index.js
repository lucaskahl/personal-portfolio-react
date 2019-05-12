import React, { Component } from "react";

import {
  Container,
  ProjectsWrapper,
  Information,
  Tecnologies,
  Overview
} from "./styles";

export default class Projects extends Component {
  state = {
    projects: [
      {
        id: 1,
        title: "Personal Portfolio",
        image: "https://i.imgur.com/bUU4Yvd.jpg",
        source: "https://google.com",
        link: "https://github.com/lucaskahl/personal-portfolio-react",
        tecnologies: ["ReactJS", "Styled Components", "ES6+", "CSS3", "HTML5"],
        overview:
          "Simple React project to display my portfolio of work. It was built by me using React / Typescript"
      },
      {
        id: 2,
        title: "GoBarber",
        image: "https://i.imgur.com/JKB7oIU.png",
        source: "https://google.com",
        link: "https://github.com/lucaskahl/personal-portfolio-react",
        tecnologies: ["NodeJS", "AdonisJS", "ES6+", "CSS3", "HTML5"],
        overview: "Node project using AdonisJS and a View..."
      }
    ]
  };

  render() {
    const { projects } = this.state;

    return (
      <Container>
        <h1>Projetos</h1>
        {projects.map(project => (
          <ProjectsWrapper key={project.id}>
            <Information>
              <div>
                <h3>{project.title}</h3>
                <div
                  style={{ backgroundImage: `url(${project.image})` }}
                  className="project__background"
                />
                <div className="project__actions">
                  <a target="_blank" href={project.link}>
                    Live Preview
                  </a>
                  <a target="_blank" href={project.source}>
                    View Source
                  </a>
                </div>
                <Tecnologies>
                  <h3>Tecnologias usadas</h3>
                  <ul>
                    {project.tecnologies.map(item => (
                      <li key={project.tecnologies.indexOf(item)}>{item}</li>
                    ))}
                  </ul>
                </Tecnologies>
              </div>
            </Information>
            <Overview>
              <h4>Overview</h4>
              <p>{project.overview}</p>
            </Overview>
          </ProjectsWrapper>
        ))}
      </Container>
    );
  }
}
