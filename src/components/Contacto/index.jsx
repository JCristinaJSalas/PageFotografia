import React from "react";
import { styled } from "styled-components";
import { TextField} from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

const Contacto = () => {
  return (
    <Contenedor id="contacto">
      <ContenedorContacto>
        <ContenedorContactoTitulo>Contacta a ANA!</ContenedorContactoTitulo>
        <ContenedorContactoParrafo>
          <p>
            Animate, cotiza y escribeme tus dudas. Estare esperando tu mensaje
            para que planeemos como quieres guardar tus mejores momentos en una
            fotografia.
          </p>
        </ContenedorContactoParrafo>
        <ContenedorInformacion>
          <ContenedorAna>
            <ul>
              <Lista>
                <ListaW><WhatsAppIcon/></ListaW>
                <ListaTitulo>+57 3xx-xxx-xxxx</ListaTitulo>
              </Lista>
              <Lista>
                <ListaI><InstagramIcon/></ListaI>
                <ListaTitulo>@example__1</ListaTitulo>
              </Lista>
              <Lista>
                <ListaF><FacebookIcon/></ListaF>
                <ListaTitulo>cuenta@example.com</ListaTitulo>
              </Lista>
              <Lista>
                <ListaG><EmailIcon/></ListaG>
                <ListaTitulo>cuenta@example.com</ListaTitulo>
              </Lista>
            </ul>
          </ContenedorAna>
          <Formulario>
            <FormularioParte>
              <InputGroup>
                <TextField label="Nombre" color="warning" autoComplete="off" />
              </InputGroup>
              <InputGroup>
                <TextField
                  label="Tipo de Evento"
                  color="warning"
                  autoComplete="off"
                />
              </InputGroup>
            </FormularioParte>
            <TextArea>
              <TextField
                id="outlined-multiline-static"
                label="Mensaje"
                multiline
                rows={4}
                defaultValue="Hola Ana, me gustaría cotizar..."
                fullWidth 
                color="warning"
              />
            </TextArea>

            <Boton type="submit">ENVIAR</Boton>
          </Formulario>
        </ContenedorInformacion>
      </ContenedorContacto>
    </Contenedor>
  );
};

export default Contacto;
const Contenedor = styled.div`
  margin: 5% 0;
  width: 100vw;
  margin-bottom: 20px;
  padding: 35px;
`;
const ContenedorContacto = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin: auto;
`;
const ContenedorContactoTitulo = styled.h2`
  font-size: 3rem;
  color: #e38612;
  padding-bottom: 25px;
  font-family: "Playfair Display", serif;
`;
const ContenedorContactoParrafo = styled.div`
  font-size: 15px;
  padding-bottom: 4%;
`;
const ContenedorInformacion = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const ContenedorAna = styled.div`
  flex-basis: 49%;
`;
const Lista = styled.li`
  padding: 20px;
  display: flex;
  justify-content: center;
  text-align: center;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding-bottom: 2px;
  }
`;
const ListaTitulo = styled.h6`
  padding-top: 2.2%;
  font-size: 17px;
`;
const ListaW = styled.h6`
  font-size: 40px;
  padding-right: 2%;
  color: #25d366;
`;
const ListaF = styled.h6`
  font-size: 40px;
  padding-right: 2%;
  color: #3b5998;
`;
const ListaI = styled.h6`
  font-size: 40px;
  padding-right: 2%;
  color: #d6249f;
`;
const ListaG = styled.h6`
  font-size: 40px;
  padding-right: 2%;
  color: #d43232;
`;
const Formulario = styled.form`
  width: 100%;
  background-color: #e9b06b73;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 15px;
  padding: 20px;
`;
const FormularioParte = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;
const InputGroup = styled.div`
  position: relative;
  margin-top: 20px;
  width: 100%;
  @media screen and (max-width: 1024px) {
    margin-top: 30px;
    width: 75%;
  }
`;
const Boton = styled.button`
  width: 150px;
  padding: 15px 25px;
  background-color: #e38512b9;
  border: none;
  border-radius: 5px;
  margin-bottom: 25px;
  font-size: 15px;
  letter-spacing: 1px;
  font-weight: 600;
`;
const TextArea = styled.div`
  padding: 35px;
  width: 100%;
`