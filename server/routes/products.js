import express from "express";
import ProductController from "../controllers/ProductController";
const router = express.Router();

router.get("/", ProductController.getAll);
router.post("/", ProductController.add);
router.get("/:productId", ProductController.getOne);
router.put("/:productId", ProductController.update);
router.delete("/:productId", ProductController.delete);

export default router;
