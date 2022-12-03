import express from "express";
import mongoose from "mongoose";
import path from "node:path";
import swaggerUi from "swagger-ui-express";
import swaggerDocs from "./swagger.json";

import { router } from "./router";

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    // Só roda a API se tiver sucesso ao conectar ao MongoDB
    const app = express();

    // Pega o arquivo gerado dentro da pasta uploads e disponibilizando o próprio arquivo
    app.use(
      "/uploads",
      express.static(path.resolve(__dirname, "..", "uploads"))
    );
    app.use(express.json());
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs)); // rota da documentação no Swagger
    app.use(router);

    app.listen(3001, () => {
      console.log("🔥 Server is running in port 3001 ");
    });
  })
  .catch(() => console.log("Erro ao conectar ao MongoDB"));
