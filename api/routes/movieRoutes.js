import express from 'express'
import * as movieController from '../controllers/movieController.js'

const router = express.Router()

router
    .route('/movies/:id')
    .put(movieController.update)

export default router