import React, { useState } from "react";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import ListClients from "./components/ListClients/ListClients";
import { ValidCPF } from "./models/validation";
import { Container, Typography, Breadcrumbs, Button } from "@material-ui/core";
import "fontsource-roboto";

function App() {
  const [counter, setCounter] = useState(0);
  const [component] = useState([
    <RegisterForm submitForm={submitForm} validations={{ cpf: ValidCPF }} />,
    <ListClients />,
  ]);

  function handleClick(e) {
    e.preventDefault();
    if (counter === 0) {
      setCounter(1);
      e.target.textContent = "cadastrar";
    } else {
      setCounter(0);
      e.target.textContent = "listar";
    }
  }

  return (
    <>
      <Container component="header" maxWidth="lg">
        <Typography component="h1" variant="h2" align="center">
          C.R.U.D
        </Typography>
        <Breadcrumbs style={{ margin: "15px auto", maxWidth: "max-content" }}>
          <Button variant="contained" color="primary" onClick={handleClick}>
            listar
          </Button>
        </Breadcrumbs>
      </Container>
      <Container component="article" maxWidth="md">
        {component[counter]}
      </Container>
    </>
  );
}

function submitForm(dados) {
  console.log(dados);
}

export default App;
