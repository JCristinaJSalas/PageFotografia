import React from "react";
import { styled } from "styled-components";

const Header = () => {
  return (
    <>
      <StickyBar>
        <NavegationBar>
          <LogoA href="#">
            Fotografia by <Emtag>Ana.</Emtag>
          </LogoA>

          <Checkbox type="checkbox" id="toggler" />
          <LabelToggler htmlFor="toggler">
            <IconoMenu className="bx bx-menu"></IconoMenu>
          </LabelToggler>
          <Menu>
            <List>
              <li>
                <LinkNavegation href="#perfil">SOBRE MI</LinkNavegation>
              </li>
              <li>
                <LinkNavegation href="#servicios">SERVICIOS</LinkNavegation>
              </li>
              <li>
                <LinkNavegation href="#galeria">GALERIA</LinkNavegation>
              </li>
              <li>
                <LinkNavegation href="#comentarios">OPINIONES</LinkNavegation>
              </li>
              <li>
                <LinkNavegation href="#contacto">CONTACTO</LinkNavegation>
              </li>
            </List>
          </Menu>
        </NavegationBar>
      </StickyBar>
    </>
  );
};

export default Header;

const StickyBar = styled.nav`
  position: sticky;
  top: 0;
  width: 100vw;
  z-index: 99;
`;
const NavegationBar = styled.div`
  top: 0;
  left: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 1% 5%;
  background-color: rgba(255, 255, 255, 0.712);
`;
const LogoA = styled.a`
  font-size: 1.3em;
  font-weight: 500;
  letter-spacing: 1px;
  color: rgb(0, 0, 0);
  font-family: "Playfair Display", serif;
  @media screen and (max-width: 769px) {
    font-size: 14px;
  }
`;
const Emtag = styled.em`
  font-size: 1.5em;
  color: #e38612;
  @media screen and (max-width: 769px) {
    font-size: 1.5em;
  }
`;
const List = styled.ul`
  display: flex;
  gap: 20px;
  @media screen and (max-width: 769px) {
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
`;
const LinkNavegation = styled.a`
  color: rgb(0, 0, 0);
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 1px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: #e38612;
    z-index: 1;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s ease-in-out;
  }
  &:hover::before {
    transform: scaleX(1);
  }
  @media screen and (max-width: 769px) {
    font-size: 10px;
  }
`;
const LabelToggler = styled.label`
  display: none;
  @media screen and (max-width: 769px) {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
  }
`;
const Menu = styled.div`
  @media screen and (max-width: 769px) {
    width: 100%;
    max-height: 0;
    overflow: hidden;
  }
`;
const Checkbox = styled.input`
  display: none;
  @media screen and (max-width: 769px) {
    &:checked ~ ${Menu} {
      max-height: 100%;
  }}
`;
const IconoMenu = styled.i`
  color: rgb(0, 0, 0);
`;
