import styled from "styled-components";
import Header from "../../assets/images/header.jpg";

export const Container = styled.header`
  height: 60vh;
  background: url(${Header});
  background-size: cover;
  background-position: center;
  display: flex;

  ::after {
    background-image: #000;
  }
`;

export const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-left: 50px;
  margin-right: 50px;

  width: 100%;
  height: 20%;
`;

export const Title = styled.h3`
  color: #fff;
  font-weight: bold;
  font-size: 25px;

  span {
    font-weight: 200;
  }
`;

export const List = styled.ul`
  display: flex;
`;

export const Item = styled.li`
  margin-right: 20px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #fff;
`;
