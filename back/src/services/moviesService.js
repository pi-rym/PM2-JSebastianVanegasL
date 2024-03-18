const Movie = require('../models/movie');

const getMovies = async () => {
  try {
    const movies = await Movie.find();
    return movies;
  } catch (error) {
    throw new Error(error);
  }
}
  
  module.exports = { getMovies };