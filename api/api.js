import express from 'express';
import morgan from 'morgan';
import movieRoutes from './routes/movieRoutes.js'
import ticketRoutes from './routes/ticketRoutes.js';

const api = express();

api.use(morgan('combined'));

api.use(express.json());
api.use('/tickets', ticketRoutes)
api.get('/status', (_, res) => {
  res.json({
    msg: 'API En linea funcionado',
  });
});

api.use('/movies',movieRoutes)


//TODO:
export default api;
