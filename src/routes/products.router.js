import express from "express";
const router = express.Router();

import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.controller.js";

import authMiddleware from "../middlewares/auth.js";

router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);

router.post("/products", auth, createProduct);

router.put("/products/:id", auth, updateProduct);

router.delete("/products/:id", auth, deleteProduct);


export default router;
