import React from 'react'
import RegisterForm from './components/RegisterForm/RegisterForm'
import { Container, Typography } from '@material-ui/core'
import 'fontsource-roboto'

class App extends React.Component {
  render() {
    return (
      <Container component="article" maxWidth="md" >
        <Typography component="h1" variant="h3" align="center" >Formulário de Cadastro</Typography>
        <RegisterForm submitForm={submitForm} />
      </Container>
    )
  }
}

function submitForm(dados) {
  console.log(dados)
}

export default App
