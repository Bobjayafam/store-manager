import express from "express";
import Sales from "../controllers/SalesController";
const router = express.Router();

router.get("/", Sales.getAll);

export default router;
