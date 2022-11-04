import joi from 'joi'

const updateMovieValidator = async (req, res, next) => {
    const movieSchema = joi.object({
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