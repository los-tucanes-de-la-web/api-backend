import express from 'express';
import morgan from 'morgan';
import movieRoutes from './routes/movieRoutes.js'
import ticketRoutes from './routes/ticketRoutes.js';
import userRouter from './routes/userRouter.js'

import authRoutes from './routes/authRoutes.js';
import movieRoutes from './routes/movieRoutes.js';
import projectionRoutes from './routes/projectionRoutes.js';

const api = express();

api.use(morgan('combined'));

api.use(express.json());
api.use('/tickets', ticketRoutes)
api.get('/status', (_, res) => {
  res.json({
    msg: 'API En linea funcionado',
  });
});

api.use('/verify', authRoutes);

api.use('/movies', movieRoutes);
api.use('/users', userRouter );
api.use('/projections', projectionRoutes);

export default api;
