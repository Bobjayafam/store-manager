import express from 'express';
import UserController from '../controllers/UserController';
// import UserControllerDb from "../controllers/UserControllerDb";
import Auth from '../Middleware/Auth';

const router = express.Router();


router.get('/', Auth.isLoggedInAsAdmin, UserController.getAll);
router.get('/:id', Auth.isLoggedInAsAdmin, UserController.getOne);
router.put('/:id', Auth.isLoggedInAsAdmin, UserController.update);
router.delete('/:id', Auth.isLoggedInAsAdmin, UserController.delete);

export default router;
