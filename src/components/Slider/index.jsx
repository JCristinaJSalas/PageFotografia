import React from "react";
import { styled } from "styled-components";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Boda from "../../assets/images/SliderImg/boda.jpg";
import Bautizmo from "../../assets/images/SliderImg/bautizmo.jpg";
import Cumpleanos from "../../assets/images/SliderImg/cumple.jpg";
import Grado from "../../assets/images/SliderImg/grado.jpg";

const SliderImagenes = () => {
  const imagenesSlider = [Boda, Bautizmo, Cumpleanos, Grado];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
  };
  return (
    <SliderContenedor>
      <Slider {...settings}>
        {imagenesSlider.map((image, i) => {
          return (
            <ContenedorImg key={i}>
              <Imagen src={image} alt={`Image ${i}`} />
            </ContenedorImg>
          );
        })}
      </Slider>
    </SliderContenedor>
  );
};

export default SliderImagenes;

const SliderContenedor = styled.div`
  width: 100vw;

`;
const ContenedorImg = styled.div`
height: 95vh;
`;
const Imagen = styled.img`
  width: 100%;
  height: inherit;
  object-fit: cover;
`;
