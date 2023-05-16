import React from "react";
import { styled } from "styled-components";
import boda2 from "../../assets/images/galeria/boda2.jpg";
import baby from "../../assets/images/galeria/baby.jpg";
import Quince from "../../assets/images/galeria/cara-nena.jpg";
import Embarazo from "../../assets/images/galeria/embarazo.jpg";
import Revelacion from "../../assets/images/galeria/embarazo2.jpg";
import Fiesta from "../../assets/images/galeria/fiesta2.jpg";

const Galeria = () => {
  return (
    <Contenedor id="galeria" >
      <Titulo>GALERIA: Sesión fotográfica</Titulo>
      <ContenedorGaleria>
        <GaleriaItem>
          <GaleriaImg src={boda2} alt="Boda" />
          <GaleriaTitulo>Matrimonio</GaleriaTitulo>
        </GaleriaItem>
        <GaleriaItem>
          <GaleriaImg src={baby} alt="Boda" />
          <GaleriaTitulo>Bebes</GaleriaTitulo>
        </GaleriaItem>
        <GaleriaItem>
          <GaleriaImg src={Quince} alt="Boda" />
          <GaleriaTitulo>Quince Años</GaleriaTitulo>
        </GaleriaItem>
        <GaleriaItem>
          <GaleriaImg src={Embarazo} alt="Boda" />
          <GaleriaTitulo>Embarazo</GaleriaTitulo>
        </GaleriaItem>
        <GaleriaItem>
          <GaleriaImg src={Revelacion} alt="Boda" />
          <GaleriaTitulo>Revelacion del bebe</GaleriaTitulo>
        </GaleriaItem>
        <GaleriaItem>
          <GaleriaImg src={Fiesta} alt="Boda" />
          <GaleriaTitulo>Fiestas</GaleriaTitulo>
        </GaleriaItem>
      </ContenedorGaleria>
    </Contenedor>
  );
};

export default Galeria;
const Contenedor = styled.div`
  margin: 5% 0;
  width: 100vw;
  margin-bottom: 20px;
  padding:35px;
`;
const Titulo = styled.h2`
  text-align: center;
  font-family: "Playfair Display", serif;
  font-size: 2.5vw;
  font-style: italic;
  font-weight: 400;
  padding-bottom: 30px;
`;
const ContenedorGaleria = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 250px;
  grid-gap: 10px;
  @media screen and (max-width:765px){ 
    grid-template-columns: repeat(1, 1fr);
  }
`;
const GaleriaItem = styled.div`
  position: relative;
  &:nth-child(1) {
    grid-row-start: span 2;
    @media screen and (max-width:765px){
    grid-row-start: span 1;
  }
  }
  &:nth-child(2) {
    grid-column-start: span 2;
    @media screen and (max-width:765px){
      grid-column-start: span 1;
  }
  }
  &:nth-child(8) {
    grid-column-start: span 2;
    @media screen and (max-width:765px){
      grid-column-start: span 1;
  }
  }

`;
const GaleriaImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const GaleriaTitulo = styled.h3`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 15px;
  background-color: rgba(255, 255, 255, 0.473);
  text-align: center;
  font-family: 'Playfair Display', serif;
  font-size: 1.5vw;
  font-style: italic;
  font-weight: 600; 
  padding-bottom: 30px;
  @media screen and (max-width:765px){
    font-size: 2.5vw;
    padding-bottom: 5px;
  }
`;
