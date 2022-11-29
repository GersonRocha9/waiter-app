import express from "express";
import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017")
  .then(() => {
    // Só roda a API se tiver sucesso ao conectar ao MongoDB
    const app = express();

    app.listen(3001, () => {
      console.log("🔥 Server is running in port 3001 ");
    });
  })
  .catch(() => console.log("Erro ao conectar ao MongoDB"));
