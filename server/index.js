import express from 'express';
import logger from 'morgan';
import homeRoute from './routes/home';
import userRoutes from './routes/users';
import productRoutes from './routes/products';
import salesRoutes from './routes/sales';
import authRoutes from './routes/auth';

const app = express();

const PORT = process.env.PORT || 4000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', homeRoute);
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/sales', salesRoutes);
app.use('/api/v1/auth', authRoutes);

app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'The route you requested is not available',
  });
});


const server = app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});

export default server;
