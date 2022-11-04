// import joi from 'joi'
const projectionValidator = async(req, res, next) => {

    const Joi = require('joi-oid')

const projectionSchema = Joi.object({
    date: Joi.date(),
    language: Joi.string(),
    subtitles: Joi.string().max(7),
    cinema: Joi.objectId(),
    movie: Joi.objectId(),
    price:Joi.number(),
})
 
try {
    await projectionSchema.validateAsync()
} catch (error) {
    
}
   
}

export { projectionValidator };