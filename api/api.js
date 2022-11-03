import express from 'express';
import morgan from 'morgan';

import authRoutes from './routes/authRoutes.js'

import movieRoutes from './routes/movieRoutes.js';


const api = express();

api.use(morgan('combined'));

api.use(express.json());

api.get('/status', (_, res) => {
  res.json({
    msg: 'API En linea funcionado',
  });
});

<<<<<<< HEAD
api.use('/cinemas',cinemaRoutes)
=======
api.use("/verify",authRoutes)
//TODO:

>>>>>>> 64580be44c05a8a33acb602dd52e259440516c7a
api.use('/movies', movieRoutes);


export default api;
