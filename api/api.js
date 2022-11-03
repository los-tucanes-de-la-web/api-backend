import express from 'express'
import morgan from 'morgan'
import userRouter from './routes/userRouter.js'
import authRoutes from './routes/authRoutes.js'

import cinemaRoutes from './routes/cinemaRoutes.js'
import movieRoutes from './routes/movieRoutes.js'
import projectionRoutes from './routes/projectionRoutes.js'
import cinemaRoutes from './routes/cinemaRoutes.js'
import reviewRoutes from './routes/reviewRoutes.js'
import projectionRoutes from './routes/projectionRoutes.js';

const api = express();


api.use(morgan('combined'))

api.use(express.json())

api.get('/status', (_, res) => {
  res.json({
    msg: 'API En linea funcionado'
  })
})


api.use('/verify', authRoutes)
api.use('/movies', movieRoutes)
api.use('/cinemas',cinemaRoutes)
api.use('/projections', projectionRoutes)
api.use('/reviews', reviewRoutes)
api.use('/users', userRouter)

export default api

