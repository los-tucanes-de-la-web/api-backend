import express from 'express';
import morgan from 'morgan';
<<<<<<< HEAD
import movieRoutes from './routes/movieRoutes.js'
import authRoutes from './routes/authRoutes.js'
=======
import userRouter from './routes/userRouter.js'

import authRoutes from './routes/authRoutes.js';
import movieRoutes from './routes/movieRoutes.js';
import projectionRoutes from './routes/projectionRoutes.js';
>>>>>>> c99503a058ef8a7ba4f8d43f960ef4a7ef8b7827

const api = express();

api.use(morgan('combined'));

api.use(express.json());

api.get('/status', (_, res) => {
  res.json({
    msg: 'API En linea funcionado',
  });
});

api.use('/verify', authRoutes);

api.use('/movies', movieRoutes);
api.use('/users', userRouter );
api.use('/projections', projectionRoutes);

<<<<<<< HEAD
//TODO:
api.use(authRoutes)
=======
>>>>>>> c99503a058ef8a7ba4f8d43f960ef4a7ef8b7827
export default api;
