import React from "react";
import { Typography, List, ListItem } from "@material-ui/core";
import "fontsource-roboto";

function ListClients() {
  return (
    <section id="listar">
      <Typography
        component="h2"
        variant="h4"
        align="center"
        style={{ marginBottom: "7px" }}
      >
        Lista de Clientes
      </Typography>
      <List style={{ width: "70%", margin: "0 auto" }}>
        <ListItem alignItens="flex-start" button divider selected>
          Francisco
        </ListItem>
        <ListItem alignItens="flex-start" button divider selected>
          Jennifer
        </ListItem>
      </List>
    </section>
  );
}

export default ListClients;
