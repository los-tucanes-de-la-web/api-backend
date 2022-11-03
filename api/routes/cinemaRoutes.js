import express from 'express';
import * as cinemaController from '../controllers/cinemaController.js';

const router = express.Router();

router
  .route('/')
  .delete(cinemaController.remove);


export default router;