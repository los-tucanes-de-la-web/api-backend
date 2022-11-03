import express from "express"
import * as projectionController from "../controllers/projectionController.js"

const router = express.Router()

router
    .route('/:id')
    .put(projectionController.update)

export default router