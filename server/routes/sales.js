import express from 'express';
import SalesController from '../controllers/SalesController';

const router = express.Router();

router.get('/', SalesController.getAll);
router.get('/:saleId', SalesController.getOne);
router.post('/', SalesController.add);

export default router;
