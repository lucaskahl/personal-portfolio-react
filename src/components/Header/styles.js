import styled from "styled-components";
import Header from "../../assets/images/header.jpg";
import Location from "../../assets/images/location.svg";
import Linkedin from "../../assets/images/linkedin.svg";
import Github from "../../assets/images/github.svg";
import Medium from "../../assets/images/medium.svg";
import Email from "../../assets/images/email.svg";
import Resume from "../../assets/images/resume.svg";

export const HeaderContainer = styled.header`
  border-top: 8px solid #b44a3a;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 60vh;
  background: url(${Header});
  background-size: cover;
  background-position: center;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);

  ::after {
    content: "";
    background: rgba(0, 0, 0, 0.3);
    width: 100%;
    height: 100%;
    position: absolute;
  }
`;

export const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 100px 0;
  height: 20%;
  z-index: 2;
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
  list-style: none;
`;

export const Item = styled.li`
  margin-right: 20px;
`;

export const Link = styled.a`
  text-decoration: none;
  color: #fff;
`;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  min-width: 415px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Informations = styled.div`
  h1 {
    color: #fff;
  }

  h5 {
    font-size: 18px;
    color: #fff;
    font-weight: 200;
    margin-top: 10px;

    &::before {
      content: "";
      display: inline-block;
      background-image: url(${Location});
      background-size: 20px 20px;
      height: 20px;
      width: 20px;
      margin-right: 5px;
    }
  }
`;

export const Contacts = styled.div`
  margin-top: 40px;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  li {
    margin-right: 30px;
    list-style: none;
    transition: transform 0.2s;

    &:hover {
      transform: translateY(-20%);
    }

    a {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      color: #fff;

      &::before {
        margin-bottom: 5px;
      }
    }
  }

  li:nth-child(1) {
    a {
      &::before {
        content: "";
        display: inline-block;
        background-image: url(${Linkedin});
        background-size: 20px 20px;
        height: 20px;
        width: 20px;
        margin-right: 5px;
      }
    }
  }

  li:nth-child(2) {
    a {
      &::before {
        content: "";
        display: inline-block;
        background-image: url(${Github});
        background-color: #fff;
        border-radius: 50%;
        background-size: 20px 20px;
        height: 20px;
        width: 20px;
        margin-right: 5px;
      }
    }
  }

  li:nth-child(3) {
    a {
      &::before {
        content: "";
        display: inline-block;
        background-image: url(${Medium});
        background-size: 20px 20px;
        height: 20px;
        width: 20px;
        margin-right: 5px;
      }
    }
  }

  li:nth-child(4) {
    a {
      &::before {
        content: "";
        display: inline-block;
        background-image: url(${Email});
        background-size: 20px 20px;
        height: 20px;
        width: 20px;
        margin-right: 5px;
      }
    }
  }

  li:nth-child(5) {
    a {
      &::before {
        content: "";
        display: inline-block;
        background-image: url(${Resume});
        background-size: 20px 20px;
        height: 20px;
        width: 20px;
        margin-right: 5px;
      }
    }
  }
`;
