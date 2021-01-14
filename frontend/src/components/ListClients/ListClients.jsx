import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import "fontsource-roboto";

function ListClients() {
  return (
    <section>
      <Typography
        component="h2"
        variant="h4"
        align="center"
        style={{ marginBottom: "7px" }}
      >
        Lista de Clientes
      </Typography>
    </section>
  );
}

export default ListClients;
