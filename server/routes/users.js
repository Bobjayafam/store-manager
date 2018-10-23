import express from "express";
import User from "../controllers/UserController";
const router = express.Router();

router.post("/", User.add);

export default router;
