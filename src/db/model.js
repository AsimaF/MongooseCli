const mongoose = require("mongoose");

const movieSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    actor: {
        type: String,
        default: "Actor unknown",
    },
    genre: {
        type: String,
        default: "Genre unknown",
    },
    rating: {
        type: String,
        default: "Rating unknown",
    }
})

const MovieModel = mongoose.model("Movies", movieSchema)

module.exports = MovieModel