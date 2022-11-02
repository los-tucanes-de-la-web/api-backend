import express from 'express';
import morgan from 'morgan';
import authRoutes from '../api/routes/authRoutes.js'

const api = express();

api.use(morgan('combined'));

api.use(express.json());

api.get('/status', (_, res) => {
  res.json({
    msg: 'API En linea funcionado',
  });
});
//TODO:
api.use(authRoutes)
export default api;
