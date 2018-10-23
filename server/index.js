import express from "express";
import logger from "morgan";
import dotenv from "dotenv";
import indexRoutes from "./routes/index";
import userRoutes from "./routes/users";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 4000;

app.use(logger("dev"));
app.use(express.json());
app.use("/", indexRoutes);
app.use("/api/v1/users", userRoutes);

const server = app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});

export default server;
