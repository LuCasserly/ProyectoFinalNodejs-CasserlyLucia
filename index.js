import "dotenv/config";
import express from "express";
import productsRouter from "./src/routes/products.router.js";
import authRouter from "./src/routes/auth.router.js";


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Bienvenidos a la tienda virtual" });
});

app.use("/api/products", productsRouter);
app.use("/auth", authRouter);

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
