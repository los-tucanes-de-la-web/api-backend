import express from 'express';
import * as cinemaController from '../controllers/cinemaController.js';

const router = express.Router();

router
.route('/').post(cinemaController.create);

router
  .route('/:id')
  .delete(cinemaController.remove)
  .put(cinemaController.update)
  

export default router;

