import express from 'express';
import * as movieController from '../controllers/movieController.js';
import { updateMovieValidator } from '../middlewares/updateMovieValidator.js';

const router = express.Router();

router
  .route('/')
  .post(movieController.create);

router
  .route('/:id')
  .put(updateMovieValidator, movieController.update)

export default router;
