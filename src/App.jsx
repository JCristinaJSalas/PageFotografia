import { styled } from "styled-components";
import "./App.css";
import Header from "./components/Header";
import SliderImagenes from "./components/Slider";
import Perfil from "./components/Perfil";
import Servicios from "./components/Servicios";
import Galeria from "./components/Galeria";
import Comentarios from "./components/Comentarios";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <SliderImagenes />
      <Perfil />
      <Servicios />
      <Galeria/>
      <Comentarios/>
      <Contacto/>
      <Footer/>
    </>
  );
}

export default App;
