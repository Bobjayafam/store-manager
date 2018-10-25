import express from "express";
import User from "../controllers/UserController";
const router = express.Router();

router.post("/", User.add);
router.get("/", User.getAll);
router.get("/:userId", User.getOne);
router.put("/:userId", User.update);
router.delete("/:userId", User.delete);

export default router;
