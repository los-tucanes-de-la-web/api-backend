import express from 'express';
import morgan from 'morgan';
<<<<<<< HEAD
import userRouter from './routes/userRouter.js'
=======

import authRoutes from './routes/authRoutes.js'

>>>>>>> 64580be44c05a8a33acb602dd52e259440516c7a
import movieRoutes from './routes/movieRoutes.js';


const api = express();

api.use(morgan('combined'));

api.use(express.json());

api.get('/status', (_, res) => {
  res.json({
    msg: 'API En linea funcionado',
  });
});

api.use("/verify",authRoutes)
//TODO:

api.use('/movies', movieRoutes);
api.use('/users', userRouter );


export default api;
