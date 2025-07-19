/*import express from "express";
const router = express.Router();

import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.controller.js";

import auth from "../middlewares/auth.middleware.js";

router.get("/", getAllProducts);
router.get("/:id", getProductById);

router.post("/", auth, createProduct);

router.put("/:id", auth, updateProduct);

router.delete("/:id", auth, deleteProduct);


export default router;*/

import express from "express";
const router = express.Router();

console.log("✅ Cargado: products.router.js");

router.get("/", (req, res) => {
  res.send("✅ ¡Ruta /api/products responde OK!");
});

export default router;


