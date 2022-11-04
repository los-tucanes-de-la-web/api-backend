import joi from 'joi';
import ObjectId from 'joi-objectid';
const JoiObjectId = ObjectId(joi);
const reviewEditValidator = async (req, res, next) => {

    
  const reviewSchema = joi.object({
    comment: joi.string().empty().required(),
    rating: joi.number().integer().min(1).max(5).required(),
    movie: JoiObjectId().required(),
    user: JoiObjectId().required(),
  });

  try {
    await reviewSchema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      msg: 'Bad request',
      error,
    });
  }
};

export { reviewEditValidator };
