import React, { useState } from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import "fontsource-roboto";

function RegisterForm({ submitForm, validations }) {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [birthDay, setBirthDay] = useState("");
  const [erros, setErros] = useState({ cpf: { valid: true, text: "" } });

  function validationInput(e) {
    e.preventDefault();

    const { id, value } = e.target;
    const newState = { ...erros };

    newState[id] = validations[id](value);

    setErros(newState);
  }

  function checkSubmit() {
    for (let i in erros) {
      if (!erros[i].valid) {
        return false;
      }
    }

    return true;
  }

  return (
    <section id="cadastrar">
      <Typography
        component="h2"
        variant="h4"
        align="center"
        style={{ marginBottom: "7px" }}
      >
        Cadastrar Cliente
      </Typography>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (checkSubmit()) {
            submitForm({ name, cpf, birthDay });
          }
        }}
      >
        <fieldset style={{ marginBottom: "7px" }}>
          <legend>Dados Pessoais</legend>
          <TextField
            value={name}
            type="text"
            id="name"
            label="Nome Completo"
            variant="outlined"
            required
            fullWidth
            margin="dense"
            onChange={(e) => {
              let re = /^[A-Za-záàâãéèêíïóôõöúçñ ]*$/;
              let vName = name;
              if (re.exec(e.target.value) !== null) {
                vName = e.target.value;
              }
              setName(vName);
            }}
          />
          <TextField
            value={cpf}
            error={!erros.cpf.valid}
            helperText={erros.cpf.text}
            type="text"
            id="cpf"
            label="CPF"
            variant="outlined"
            required
            fullWidth
            margin="dense"
            onChange={(e) => {
              let re = /^[0-9]*$/;
              let vCpf = cpf;
              if (re.exec(e.target.value) !== null) {
                vCpf = e.target.value;
              }
              setCpf(vCpf);
            }}
            onBlur={validationInput}
          />
          <TextField
            value={birthDay}
            type="date"
            id="birthDay"
            label="Data de Nasc."
            variant="outlined"
            required
            margin="dense"
            InputLabelProps={{ shrink: true }}
            onChange={(e) => {
              setBirthDay(e.target.value);
            }}
          />
        </fieldset>
        <Button type="submit" variant="contained" color="primary" disabled={!checkSubmit()}>
          Cadastrar
        </Button>
      </form>
    </section>
  );
}

export default RegisterForm;
