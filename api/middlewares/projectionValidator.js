import joi from 'joi';
import ObjectId from 'joi-objectid';

const JoiObjectId = ObjectId(joi);
const projectionValidator = async(req, res, next) => {

const projectionSchema = joi.object({
    date: joi.date(),
    language: joi.string(),
    subtitles: joi.string().max(7),
    cinema: JoiObjectId().required(),
    movie: JoiObjectId().required(),
    price:joi.number(),
})
 
try {
    await projectionSchema.validateAsync(req.body);
    next();

} catch (error) {
    return res.status(400).json({
        msg: 'Bad request',
        error,
    });
}
   
}

export { projectionValidator };