import express from "express";
import indexRoutes from "./routes/index";
import productRoutes from "./routes/products";

const app = express();

const PORT = 4000;

app.use(express.json());
app.use("/", indexRoutes);
app.use("/api/v1/products", productRoutes);

const server = app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});

export default server;
