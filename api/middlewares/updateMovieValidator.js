import joi from 'joi'

const updateMovieValidator = async (req, res, next) => {
    const movieSchema = joi.object({
<<<<<<< HEAD
        title: joi.string().required(),
        director: joi.array().items(joi.string()).min(1).required(),
        producer: joi.array().items(joi.string()).min(1).required(),
        genre: joi.array().items(joi.string()).min(1).required(),
        cast: joi.array().items(joi.string()).min(1).required(),
        releaseDate: joi.date().required(),
        duration: joi.number().greater(60).required(),
        synopsis: joi.string().required(),
        score: joi.number().required(),
        poster: joi.string().required()
=======
        title: joi.string(),
        director: joi.array().min(1),
        producer: joi.array().min(1),
        genre: joi.array().min(1),
        cast: joi.array().min(1),
        releaseDate: joi.date(),
        duration: joi.number().greater(60),
        synopsis: joi.string(),
        score: joi.number(),
        poster: joi.string()
>>>>>>> fc8cef0 (Movie update validator)
    })

    try {
        await movieSchema.validateAsync(req.body)
        next()
    } catch (error) {
        return res.status(400).json({
            msg: 'Invalid inputs',
            error
        })
    }
}

export { updateMovieValidator }