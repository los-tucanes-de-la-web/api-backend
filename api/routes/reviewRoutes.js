import express from 'express'
import * as reviewController from '../controllers/reviewController.js'

const router = express.Router()

router.route('/').post(authValidator, reviewController.create)

export default router
