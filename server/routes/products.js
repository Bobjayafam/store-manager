import express from "express";
import Product from "../controllers/ProductController";
const router = express.Router();

router.get("/", Product.getAll);
router.post("/", Product.add);
router.get("/:productId", Product.getOne);
router.put("/:productId", Product.update);
router.delete("/:productId", Product.delete);

export default router;
