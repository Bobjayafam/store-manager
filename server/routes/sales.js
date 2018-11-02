import express from 'express';
import SalesController from '../controllers/SalesController';
import Auth from '../Middleware/Auth'
;
const router = express.Router();

router.get('/', Auth.isLoggedInAsAdmin, SalesController.getAll);
router.get('/:id', Auth.verifyToken, SalesController.getOne);
router.post('/', Auth.verifyToken, SalesController.add);

export default router;
