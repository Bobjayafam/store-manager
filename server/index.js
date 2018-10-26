import express from "express";
import logger from "morgan";
import dotenv from "dotenv";
import homeRoute from "./routes/home";
import userRoutes from "./routes/users";
import productRoutes from "./routes/products";
import salesRoutes from "./routes/sales";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 4000;

app.use(logger("dev"));
app.use(express.json());
app.use("/api/v1", homeRoute);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/products", productRoutes);
app.use("/api/v1/sales", salesRoutes);

const server = app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});

export default server;
