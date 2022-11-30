import { Router } from "express";
import multer from "multer";
import path from "node:path";
import { createCategory } from "./app/useCases/categories/createCategory";
import { deleteCategory } from "./app/useCases/categories/deleteCategory";
import { listCategories } from "./app/useCases/categories/listCategories";
import { listProductsByCategory } from "./app/useCases/categories/listProductsByCategory";
import { cancelOrder } from "./app/useCases/orders/cancelOrder";
import { changeOrderStatus } from "./app/useCases/orders/changeOrderStatus";
import { createOrder } from "./app/useCases/orders/createOrder";
import { listOrders } from "./app/useCases/orders/listOrders";
import { createProduct } from "./app/useCases/products/createProduct";
import { deleteProduct } from "./app/useCases/products/deleteProduct";
import { listProducts } from "./app/useCases/products/listProducts";

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
