import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 100px 0;

  h1 {
    margin-top: 50px;
  }
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 800px;
`;

export const Information = styled.div`
  h3 {
    margin-top: 30px;
    margin-bottom: 20px;
  }

  .project {
    &__background {
      background-image: url("http://raymond-jay.herokuapp.com/static/media/personal_site_poster.18d40346.jpg");
      background-size: 300px 200px;
      width: 300px;
      height: 200px;
      box-shadow: 0 8px 10px rgba(0, 0, 0, 0.3);
    }

    &__actions {
      margin-top: 10px;
      margin-bottom: 10px;
      cursor: pointer;
      a {
        color: #4497e2;
      }

      a:nth-child(1) {
        margin-left: 10px;
      }

      a:nth-child(2) {
        margin-left: 30px;
      }
    }
  }
`;

export const Overview = styled.div``;
