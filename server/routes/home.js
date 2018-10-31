import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Welcome to store manager API',
  });
});

export default router;
