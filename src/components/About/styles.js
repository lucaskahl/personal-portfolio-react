import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 100px 0;
  margin-top: 100px;
`;

export const Informations = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  position: relative;
  padding: 80px 0;
  padding-left: 0px;
  max-width: 300px;

  &::after {
    content: "";
    position: absolute;
    width: 5px;
    background: #e9e9e9;
    right: 0;
    top: 0;
    height: 100%;
    box-shadow: 0.6rem 0 1rem rgba(0, 0, 0, 0.15);
  }

  h2 {
    font-size: 30px;
    margin-bottom: 20px;
    color: #353a47;
  }

  ol {
    padding-left: 20px;

    li {
      margin-bottom: 20px;
      font-size: 18px;

      &::after {
        content: "";
        z-index: 2;
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        width: 5px;
        background: none;
      }
    }

    .no-active {
      &:hover {
        color: #d17e72;
        position: relative;

        &::after {
          background: #d17e72;
          width: 5px;
          height: 100%;
        }
      }
    }

    .active {
      color: #b44a3a;
      position: relative;

      &::after {
        background: #b44a3a;
      }
    }
  }
`;

export const Details = styled.div`
  padding: 80px 0;
  margin-left: 40px;
  max-width: 900px;

  h2 {
    font-size: 24px;
    color: #0d0504;
    margin-bottom: 20px;
  }

  p {
    line-height: 24px;
    font-size: 16px;
    color: #646f79;
  }
`;
