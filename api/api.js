import express from 'express';
import morgan from 'morgan';
import movieRoutes from './routes/movieRoutes.js'
import authRoutes from './routes/authRoutes.js'

const api = express();

api.use(morgan('combined'));

api.use(express.json());

api.get('/status', (_, res) => {
  res.json({
    msg: 'API En linea funcionado',
  });
});

api.use('/movies',movieRoutes)


//TODO:
api.use(authRoutes)
export default api;
