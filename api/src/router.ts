import { Router } from "express";
import multer from "multer";
import path from "node:path";
import {
  cancelOrder,
  changeOrderStatus,
  createCategory,
  createOrder,
  createProduct,
  deleteCategory,
  deleteProduct,
  listCategories,
  listOrders,
  listProducts,
  listProductsByCategory,
} from "./app/useCases";

export const router = Router();

// Upload de imagem de um produto
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, "..", "uploads")); // diretório que será salvo a imagem
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`); // filename personalizado para a imagem salva
    },
  }),
});

// List Categories
router.get("/categories", listCategories);

// Create Category
router.post("/categories", createCategory);

// Delete Category
router.delete("/categories/:categoryId", deleteCategory);

// List Products
router.get("/products", listProducts);

// Create Product
router.post("/products", upload.single("image"), createProduct);

// Delete Product
router.delete("/products/:productId", deleteProduct);

// List Products By Category
router.get("/categories/:categoryId/products", listProductsByCategory);

// List Orders (Pedidos)
router.get("/orders", listOrders);

// Create Order
router.post("/orders", createOrder);

// Change Order Status
// PUT -> alteração completa
// PATCH -> alteração parcial, de apenas um ou poucos dados
router.patch("/orders/:orderId", changeOrderStatus);

// Delete/Cancel Order
router.delete("/orders/:orderId", cancelOrder);
