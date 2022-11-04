import joi from "joi";
const createReviewValidation = async (req, res, next) => {
  const reviewSchema = joi.object({
    comment: joi.string().required(),
    rating: joi.number().required(),
  });
  try {
    await reviewSchema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      msg: "datos invalidos",
      error,
    });
  }
};
export { createReviewValidation };
