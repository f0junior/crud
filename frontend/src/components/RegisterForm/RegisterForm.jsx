import React, { useState } from "react";
import { TextField, Button, Typography } from "@material-ui/core";
import "fontsource-roboto";

function RegisterForm({ submitForm }) {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [birthDay, setBirthDay] = useState("2000-01-01");
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
          submitForm({ name, cpf, birthDay });
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
            onBlur={(e) => {
              const ehValid = ValidCPF(e.target.value);
              setErros({ cpf: ehValid });
            }}
          />
          <TextField
            value={birthDay}
            type="date"
            id="birthDay"
            label="Data de Nasc."
            variant="outlined"
            required
            margin="dense"
            onChange={(e) => {
              setBirthDay(e.target.value);
            }}
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

function ValidCPF(strCPF) {
  var Soma;
  var Resto;
  Soma = 0;

  if (strCPF === "00000000000")
    return { valid: false, text: "CPF não é válido" };

  for (let i = 1; i <= 9; i++)
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

  if (Resto === 10 || Resto === 11) Resto = 0;
  if (Resto !== parseInt(strCPF.substring(9, 10)))
    return { valid: false, text: "CPF não é válido" };

  Soma = 0;
  for (let i = 1; i <= 10; i++)
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;

  if (Resto === 10 || Resto === 11) Resto = 0;
  if (Resto !== parseInt(strCPF.substring(10, 11)))
    return { valid: false, text: "CPF não é válido" };
  return { valid: true, text: "" };
}
