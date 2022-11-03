import mongoose from 'mongoose'

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    director: [{
        type: String,
        required: true
    }],
    producer: [{
        type: String,
        required: true
    }],
    genre: [{
        type: String,
        required: true
    }],
    cast: [{
        type: String,
        required: true
    }],
    releaseDate: {
        type: Date,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    synopsis: {
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    poster: {
        type: String,
        required: true
    }
})

export default mongoose.model('Movie', movieSchema)