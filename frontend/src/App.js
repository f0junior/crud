import React from 'react'
import RegisterForm from './components/RegisterForm/RegisterForm'
import { Container, Typography, Breadcrumbs, Button } from '@material-ui/core'
import 'fontsource-roboto'

class App extends React.Component {
  render() {
    return (
      <>
        <Container component="header" maxWidth="lg" >
          <Typography component="h1" variant="h2" align="center" >C.R.U.D</Typography>
          <Breadcrumbs align="center" maxItems={2}>
            <Button>Cadastrar</Button>
            <Button>Listar</Button>
          </Breadcrumbs>
        </Container>
        <Container component="article" maxWidth="md">
          <RegisterForm submitForm={submitForm} />
        </Container>
      </>
    )
  }
}

function submitForm(dados) {
  console.log(dados)
}

export default App
