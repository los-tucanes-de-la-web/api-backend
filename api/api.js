import express from 'express';
import morgan from 'morgan';

import authRoutes from './routes/authRoutes.js';
import movieRoutes from './routes/movieRoutes.js';
import projectionRoutes from './routes/projectionRoutes.js';
import userRouter from './routes/userRouter.js';

const api = express();

api.use(morgan('combined'));

api.use(express.json());

api.get('/status', (_, res) => {
  res.json({
    msg: 'API En linea funcionando',
  });
});

api.use('/auth', authRoutes);
api.use('/movies', movieRoutes);
api.use('/users', userRouter);
api.use('/projections', projectionRoutes);

//TODO:
api.use(authRoutes);
export default api;
