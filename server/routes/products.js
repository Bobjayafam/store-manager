import express from "express";
import Product from "../controllers/ProductController";
const router = express.Router();

router.get("/", Product.getAll);

export default router;
