import React from "react";
import { styled } from "styled-components";

import Comentario1 from '../../assets/images/perfiles/hombre.jpg'
import Comentario2 from '../../assets/images/perfiles/baby2.jpg'
import Comentario3 from '../../assets/images/perfiles/pexels-pixabay-38554.jpg'

const Comentarios = () => {
  return (
    <Contenedor id="comentarios">
      <ContenedorComentarios>
        <ContenedorTitulo>OPINIONES</ContenedorTitulo>
        <ContenedorPerfil>
        <Comentario>
          <ComentarioImg src={Comentario1} alt="ComentarioImg1"/>
          <ComentarioParrafo>El mejor servicio de fotografia, un excelente acompañamiento en todo nuestro evento.</ComentarioParrafo>
          <ComentarioTitulo>Familia Rodriguez Hernandez</ComentarioTitulo>
        </Comentario>
        <Comentario>
          <ComentarioImg src={Comentario2} alt="ComentarioImg2"/>
          <ComentarioParrafo>Mi bebe se sintio muy comodo en la secion y se divirtio muchoo!, ademas de excelentes fotos.</ComentarioParrafo>
          <ComentarioTitulo>Familia Perez Rojas</ComentarioTitulo>
        </Comentario>
        <Comentario>
          <ComentarioImg src={Comentario3}/>
          <ComentarioParrafo>Mi matrimonio fue cubierto con esta gran fotografa. Cada momento esta en nuestro album ahora. Gracias Ana.</ComentarioParrafo>
          <ComentarioTitulo>Familia Duran Hernandez</ComentarioTitulo>
        </Comentario>
      </ContenedorPerfil>
      </ContenedorComentarios>
    </Contenedor>
  );
};

export default Comentarios;
const Contenedor = styled.div`
  margin: 5% 0;
  width: 100vw;
  margin-bottom: 20px;
`;
const ContenedorComentarios = styled.div`
  background-color: #d1d0d15e;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 100px 0;
`;
const ContenedorTitulo = styled.h2`
  text-align: center;
  font-family: "Playfair Display", serif;
  font-size: 2.5vw;
  font-style: italic;
  font-weight: 400;
  padding-bottom: 30px;
`;
const ContenedorPerfil = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  @media screen and (max-width:765px){
    flex-direction: column;
  }
`;
const Comentario = styled.div`
  padding: 25px;
  width: 33%;
  @media screen and (max-width:765px){
    padding: 25px;
    width: 100%;
  }
`;
const ComentarioImg = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
`;
const ComentarioParrafo = styled.p`
  font-family: "Raleway", sans-serif;
  padding: 20px;
  font-size: 15px;
`;
const ComentarioTitulo = styled.h4`
  font-size: 14px;
  color: #e38612;
  font-weight: 300;
  font-family: "Pacifico", cursive;
`;
