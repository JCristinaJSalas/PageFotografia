import React from "react";
import { styled } from "styled-components";
import ImgPerfil from "../../assets/images/SliderImg/perfil.jpg";

const Perfil = () => {
  return (
    <ContenedorPerfil id="perfil">
      <ContenedorTarjeta>
        <ContenedorImagen>
          <Img src={ImgPerfil} alt="perfil" />
        </ContenedorImagen>
        <ContenedorModelo>
          <Saludo>
            Hola!, Soy <EmTag>Ana</EmTag>
          </Saludo>
          <ContenedorParrafo>
            Fotografa profesional, dedicada a la fotografia de bodas, cumpleanos
            entre otros eventos. Yo me encargare de plasmar los mejores momentos
            en fotografias y videos.
          </ContenedorParrafo>
        </ContenedorModelo>
      </ContenedorTarjeta>
    </ContenedorPerfil>
  );
};

export default Perfil;
const ContenedorPerfil = styled.div`
  margin: 5% 0;
  width: 100vw;
  margin-bottom: 20px;
  padding:35px;
`;
const ContenedorTarjeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  @media screen and (max-width: 769px) {
    padding: 0;
    flex-direction: column;
  }
`;

const ContenedorImagen = styled.div`
  width: 50%;
`;
const Img = styled.img`
  width: 100%;
  box-shadow: 4px 3px 20px -3px rgba(0, 0, 0, 0.8);
`;
const ContenedorModelo = styled.div`
  padding-left: 50px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  @media screen and (max-width: 769px) {
    padding: 0;
  }
`;

const Saludo = styled.h3`
  padding-bottom: 25px;
  font-size: 4vw;
  font-family: "Playfair Display", serif;
  font-weight: 600;
`;
const EmTag = styled.em`
  font-size: 1.5em;
  color: #e38612;
`;

const ContenedorParrafo = styled.p`
  font-size: 1.4vw;
  font-weight: 300;
  padding-right:45px;
  @media screen and (max-width: 769px) {
    font-size:2.5vw;
  }
`;
