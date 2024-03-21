const Movie = require('../models/movie');

const getMovies = async () => {
  try {
    const movies = await Movie.find();
    return movies;
  } catch (error) {
    throw new Error(error);
  }
}
const createMovie = async (movieData) => {
  try {
      const movie = new Movie(movieData);
      await movie.save();
      return movie;
  } catch (error) {
      throw new Error(error.message);
  }
};
  
  module.exports = { getMovies, createMovie };

  