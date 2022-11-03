import express from 'express';
import * as movieController from '../controllers/movieController.js';

const router = express.Router();

router
  .route('/')
  .post(movieController.create);


export default router;
