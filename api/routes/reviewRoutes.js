import express from "express"
import * as reviewController from "../controllers/reviewController.js"

const router = express.Router()

router
    .route('/:id')
    .delete(reviewController.remove)

export default router