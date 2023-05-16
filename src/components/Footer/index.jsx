import React from "react";
import { styled } from "styled-components";

const Footer = () => {
  return (
    <FooterP>
      <ContenedorFooter>
        <h5> &copy; CrisSalas Developer, 2023.</h5>
      </ContenedorFooter>
    </FooterP>
  );
};

export default Footer;
const FooterP = styled.footer`
  background-color: #000000;
  color: #fff;
  margin:0;
  width: 100vw;
  padding:25px;
`;
const ContenedorFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
`;
