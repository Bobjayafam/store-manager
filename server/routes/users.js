import express from "express";
import User from "../controllers/UserController";
const router = express.Router();

router.post("/", User.add);
router.get("/", User.getAll);
router.get("/:user_id", User.getOne);

export default router;
