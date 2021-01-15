import React from "react";
import { Typography, List, ListItem } from "@material-ui/core";
import "fontsource-roboto";

function ListClients() {
  return (
    <section id="listar" style={{ display: "none" }}>
      <Typography
        component="h2"
        variant="h4"
        align="center"
        style={{ marginBottom: "7px" }}
      >
        Lista de Clientes
      </Typography>
      <List>
        <ListItem alignItens="flex-start" button>
          Francisco
        </ListItem>
        <ListItem alignItens="flex-start" button>
          Jennifer
        </ListItem>
      </List>
    </section>
  );
}

export default ListClients;
