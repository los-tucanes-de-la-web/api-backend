import express from "express";
import * as reviewController from "../controllers/reviewController.js";
import { authValidator } from "../middlewares/authValidator.js";
import { createReviewValidation } from "../middlewares/createReviewValidator.js";
const router = express.Router();

router.route("/").post(authValidator, reviewController.create);
router
  .route("/:id")
  .put(authValidator, reviewController.edit)
  .delete(reviewController.remove);

export default router;
