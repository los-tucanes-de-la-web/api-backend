import express from 'express';
import morgan from 'morgan';
import movieRoutes from './routes/movieRoutes.js'
import cinemaRoutes from './routes/cinemaRoutes.js'

const api = express();

api.use(morgan('combined'));

api.use(express.json());

api.get('/status', (_, res) => {
  res.json({
    msg: 'API En linea funcionado',
  });
});

api.use('/movies',movieRoutes)
api.use('/cinemas',cinemaRoutes)


//TODO:
export default api;
