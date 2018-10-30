import express from "express";
import UserController from "../controllers/UserController";
import UserControllerDb from "../controllers/UserControllerDb";
const router = express.Router();

router.post("/", UserControllerDb.addUser);
router.get("/", UserControllerDb.getUsers);
router.get("/:userId", UserController.getOne);
router.put("/:userId", UserController.update);
router.delete("/:userId", UserController.delete);

export default router;
