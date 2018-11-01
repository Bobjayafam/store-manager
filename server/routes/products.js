import express from 'express';
import ProductController from '../controllers/ProductController';
import Auth from '../Middleware/Auth';

const router = express.Router();

router.get('/', ProductController.getAll);
router.post('/', ProductController.add);
router.get('/:id', Auth.isLoggedInAsAdmin, ProductController.getOne);
router.put('/:id', Auth.isLoggedInAsAdmin, ProductController.update);
router.delete('/:id', Auth.isLoggedInAsAdmin, ProductController.delete);

export default router;
