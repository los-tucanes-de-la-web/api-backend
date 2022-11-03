import express from 'express';
import morgan from 'morgan';
<<<<<<< Updated upstream
import movieRoutes from './routes/movieRoutes.js';
=======
import movieRoutes from './routes/movieRoutes.js'
import projectionRoutes from './routes/projectionRoutes.js'
>>>>>>> Stashed changes

const api = express();

api.use(morgan('combined'));

api.use(express.json());

api.get('/status', (_, res) => {
  res.json({
    msg: 'API En linea funcionado',
  });
});

<<<<<<< Updated upstream
api.use('/movies', movieRoutes);
=======
api.use('/movies',movieRoutes)
api.use('/projections',projectionRoutes)
>>>>>>> Stashed changes

export default api;
