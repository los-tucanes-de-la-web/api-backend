import express from 'express'
import * as movieController from '../controllers/movieController.js'

const router = express.Router()

router
    .route('/:id')
    .put(movieController.update)

export default router