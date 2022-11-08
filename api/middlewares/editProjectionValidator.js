import Joi from 'joi-oid'

const editProjectionValidator = async (req, res, next) => {
  const projectionSchema = Joi.object({
    date: Joi.date().required(),
    language: Joi.string().required(),
    subtitles: Joi.string().required(),
    cinema: Joi.objectId().required(),
    movie: Joi.objectId().required(),
    price: Joi.number().greater(0).required(),
  });
  try {
    await projectionSchema.validateAsync(req.body);
    next();
  } catch (error) {
    return res.status(400).json({
      msg: 'Datos incorrectos',
      error,
    });
  }
};

export { editProjectionValidator };