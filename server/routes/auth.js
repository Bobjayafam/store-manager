import express from 'express';

import UserController from '../controllers/UserController';

import Auth from '../Middleware/Auth';

const router = express.Router();

router.post('/login', UserController.login);
router.post('/signup', Auth.isLoggedInAsAdmin, UserController.add);

export default router;
