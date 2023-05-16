import React from "react";
import { styled } from "styled-components";
import { TextField, TextareaAutosize } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  textarea: {
    backgroundColor: "transparent",
    borderRadius: 4,
    color: "#000000",
    fontWeight: 500,
    fontFamily: "Raleway",
    fontSize: 16,
    marginBottom: "25px",
    marginTop: "35px",
    width: "36vw",
    height: 90,
    border: "1px solid rgba(0, 0, 0, 0.23)",
    "&:focus": {
      border: "none",
      fontFamily: "Raleway",
      color: "#000000",
      fontWeight: 400,
      outline: "2px solid #e38512b9",
    },
    "@media screen and (max-width:1024px)": {
      width: "20vw",
    },
    "@media screen and (max-width:768px)": {
      width: '50vw',
    },
  },
});

const Contacto = () => {
  const classes = useStyles();
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
                <ListaW className="bx bxl-whatsapp"></ListaW>
                <ListaTitulo>+57 3xx-xxx-xxxx</ListaTitulo>
              </Lista>
              <Lista>
                <ListaI className="bx bxl-instagram"></ListaI>
                <ListaTitulo>@example__1</ListaTitulo>
              </Lista>
              <Lista>
                <ListaF className="bx bxl-facebook"></ListaF>
                <ListaTitulo>cuenta@example.com</ListaTitulo>
              </Lista>
              <Lista>
                <ListaG className="bx bxl-gmail"></ListaG>
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
            <div>
              <TextareaAutosize
                aria-label="empty textarea"
                placeholder="Hola Ana, me gustaría..."
                className={classes.textarea}
                maxRows={4}
                style={{ height: 200 }}
              />
            </div>

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
  margin-top: 50px;
  width: 250px;
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
