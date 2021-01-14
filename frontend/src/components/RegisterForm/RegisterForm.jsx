import React, { useState } from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import "./validCpf";
import "fontsource-roboto";

function RegisterForm({ submitForm }) {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [erros, setErros] = useState({ cpf: { valid: true, text: "" } });

  return (
    <section style={{ marginTop: "20px" }}>
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
          submitForm({ name, cpf });
        }}
      >
        <fieldset style={{ marginBottom: "7px" }}>
          <legend>Dados Pessoais</legend>
          <TextField
            value={name}
            onChange={(e) => {
              let re = /^[A-Za-záàâãéèêíïóôõöúçñ ]*$/;
              let vName = name;
              if (re.exec(e.target.value) !== null) {
                vName = e.target.value;
              }
              setName(vName);
            }}
            type="text"
            id="name"
            label="Nome Completo"
            variant="outlined"
            required
            fullWidth
            margin="dense"
          />
          <TextField
            value={cpf}
            onChange={(e) => {
              let re = /^[0-9]*$/;
              let vCpf = cpf;
              if (re.exec(e.target.value) !== null) {
                vCpf = e.target.value;
              }
              setCpf(vCpf);
            }}
            onBlur={(e) => {
              const ehValid = ValidCPF(e.target.value);
              setErros({ cpf: ehValid });
              setCpf(e.target.value);
            }}
            error={!erros.cpf.valid}
            helperText={erros.cpf.text}
            type="text"
            id="cpf"
            label="CPF"
            variant="outlined"
            required
            fullWidth
            margin="dense"
          />
        </fieldset>
        <Button type="submit" variant="contained" color="primary">
          Cadastrar
        </Button>
      </form>
    </section>
  );
}

export default RegisterForm;
