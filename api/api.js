import express from 'express';
import morgan from 'morgan';
import userRouter from './routes/userRouter.js'

import authRoutes from './routes/authRoutes.js';
import movieRoutes from './routes/movieRoutes.js';
import projectionRoutes from './routes/projectionRoutes.js';

const api = express();

api.use(morgan('combined'));

api.use(express.json());

api.get('/status', (_, res) => {
  res.json({
    msg: 'API En linea funcionado',
  });
});

api.use('/cinemas',cinemaRoutes)
api.use("/verify",authRoutes)
//TODO:


api.use('/movies', movieRoutes);
api.use('/users', userRouter );
api.use('/projections', projectionRoutes);

export default api;
