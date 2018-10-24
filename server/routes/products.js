import express from "express";
import Product from "../controllers/ProductController";
const router = express.Router();

router.get("/", Product.getAll);
router.get("/:productId", Product.getOne);

export default router;
