import express from 'express';
import morgan from 'morgan';
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

api.use('/movies', movieRoutes);
api.use('/projections', projectionRoutes);

export default api;
