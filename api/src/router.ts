import { Router } from "express";
import { listCategories } from "./app/useCases/categories/listCategories";

export const router = Router();

// List Categories
router.get("/categories", listCategories);

// Create Category
router.post("/categories", (req, res) => {
  res.send("Criou categoria");
});

// List Products
router.get("/products", (req, res) => {
  res.send("Lista de produtos");
});

// Create Product
router.post("/products", (req, res) => {
  res.send("Criou produto");
});

// List Products By Category
router.get("/categories/:categoryId/products", (req, res) => {
  res.send("Listou produto específico");
});

// List Orders (Pedidos)
router.get("/orders", (req, res) => {
  res.send("Lista de Pedidos");
});

// Create Order
router.post("/orders", (req, res) => {
  res.send("Criou Pedidos");
});

// Change Order Status
// PUT -> alteração completa
// PATCH -> alteração parcial, de apenas um ou poucos dados
router.patch("/orders/:orderId", (req, res) => {
  res.send("Alterou Pedido");
});

// Delete/Cancel Order
router.delete("/orders/:orderId", (req, res) => {
  res.send("Deletou Pedido");
});
