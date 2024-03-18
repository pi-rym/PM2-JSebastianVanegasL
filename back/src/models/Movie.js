const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    director: {
      type: String,
      required: true,
    },
    duration: String,
    genre: [String],
    rate: Number,
    poster: String,
  });

  const Movie = mongoose.model('Movie', movieSchema)
  
    module.exports = Movie;