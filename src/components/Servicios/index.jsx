import React from "react";
import { styled } from "styled-components";
import camara2Img from '../../assets/images/SliderImg/camara2.jpeg'
import videoImg from '../../assets/images/SliderImg/video.jpg'
import camara360 from '../../assets/images/SliderImg/camara360.webp'

const Servicios = () => {
  return <ContenedorServicios id="servicios">
        <ContenedorTarjeta>
      <Titulo>SERVICIOS</Titulo>
      <Cartas>
          <Carta1> 
            <TituloCarta>Fotografia</TituloCarta>
          </Carta1>
          <Carta2>
            <TituloCarta>Fotografia + Video</TituloCarta><br/>
          </Carta2>
          <Carta3>
            <TituloCarta>Adicionales</TituloCarta><br/>
          </Carta3>
    </Cartas>
    </ContenedorTarjeta>
  </ContenedorServicios>;
};

export default Servicios;

const ContenedorServicios = styled.div`
  margin: 5% 0;
  width: 100vw;
  margin-bottom: 20px;
`;
const ContenedorTarjeta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #d1d0d15e;
  padding: 100px;
`;
const Titulo = styled.h2`
  font-size: 2.5vw;
  padding-bottom: 45px;
  font-family: "Playfair Display", serif;
  text-align: center;
  font-style: italic;
  font-weight: 400;
`;
const Cartas = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width:500px){
    flex-direction: column;
  }
`;
const Carta1 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 29%;
  margin: 2%;
  display: flex;
  height: 40vh;
  width: 30vw;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: linear-gradient(
      0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)
    ), url(${camara2Img});
  &:hover {
    scale: 1.1;
    border: 2px solid #e38612;
  }
  @media screen and (max-width:897px){
    height: 35vh;
    width: 30vw;
  } 
  @media screen and (max-width:686px){
    height: 25vh;
    width: 25vw;
  } 
  @media screen and (max-width:500px){
    padding: 35%;
    width: 55vw;
  }
`;
const Carta2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 29%;
  margin: 2%;
  display: flex;
  height: 40vh;
  width: 30vw;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: linear-gradient(
      0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)
    ), url(${videoImg});
  &:hover {
    scale: 1.1;
    border: 2px solid #e38612;
  }
  @media screen and (max-width:897px){
    height: 35vh;
    width: 30vw;
  } 
  @media screen and (max-width:686px){
    height: 25vh;
    width: 25vw;
  } 
  @media screen and (max-width:500px){
    padding: 35%;
    width: 55vw;
  }
`;
const Carta3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-basis: 29%;
  margin: 2%;
  display: flex;
  height: 40vh;
  width: 30vw;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: linear-gradient(
      0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)
    ), url(${camara360});
  &:hover {
    scale: 1.1;
    border: 2px solid #e38612;
  }
  @media screen and (max-width:897px){
    height: 35vh;
    width: 30vw;
  } 
  @media screen and (max-width:686px){
    height: 25vh;
    width: 25vw;
  } 
  @media screen and (max-width:500px){
    padding: 35%;
    width: 55vw;
  }
`;
const TituloCarta = styled.h3`
  margin: 10px;
  padding: 10px;
  background-color: #fff;
  mix-blend-mode: screen;
  font-size: 2.5vw;
  font-family: "Pacifico", cursive;
  @media screen and (max-width:686px){
    font-size: 1.8vw;
    padding: 2px;
  }
  @media screen and (max-width:500px){
    font-size: 3.8vw;
    padding: 10px;
  }
`;
