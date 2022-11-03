import express from 'express';
import morgan from 'morgan';
import movieRoutes from './routes/movieRoutes.js';

const api = express();

api.use(morgan('combined'));

api.use(express.json());

api.get('/status', (_, res) => {
  res.json({
    msg: 'API En linea funcionado',
  });
});
//TODO:
api.use('/movies', movieRoutes)

export default api;
