import React from 'react'
import RegisterForm from './components/RegisterForm/RegisterForm'
import ListClients from './components/ListClients/ListClients'
import { Container, Typography, Breadcrumbs, Button } from '@material-ui/core'
import 'fontsource-roboto'

function handleClick(e) {
  e.preventDefault()

  let section = document.getElementById(e.target.textContent)
  let button = e.target

  if (section.style.display === 'none' && section.id === 'listar') {
    section.style.display = ''
    button.textContent = 'cadastrar'
    document.getElementById(e.target.textContent).style.display = 'none'
  } else {
    section.style.display = ''
    button.textContent = 'listar'
    document.getElementById(e.target.textContent).style.display = 'none'
  }
}

class App extends React.Component {
  render() {
    return (
      <>
        <Container component="header" maxWidth="lg" >
          <Typography component="h1" variant="h2" align="center" >C.R.U.D</Typography>
          <Breadcrumbs style={{ margin: "15px auto", maxWidth: "max-content" }}>
            <Button variant="contained" color="primary" onClick={handleClick}>
              listar
            </Button>
          </Breadcrumbs>
        </Container>
        <Container component="article" maxWidth="md">
          <RegisterForm submitForm={submitForm} />
          <ListClients />
        </Container>
      </>
    )
  }
}

function submitForm(dados) {
  console.log(dados)
}

export default App
