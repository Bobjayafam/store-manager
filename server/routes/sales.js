import express from "express";
import SalesController from "../controllers/SalesController";
const router = express.Router();

router.get("/", SalesController.getAll);
router.get("/:saleId", SalesController.getOne);

export default router;
