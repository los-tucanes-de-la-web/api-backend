import express from 'express';
import * as cinemaController from '../controllers/cinemaController.js'

const router = express.Router();

router
  .route('/:id').delete(cinemaController.remove)

  .route('/').post(cinemaController.create);

export default router;