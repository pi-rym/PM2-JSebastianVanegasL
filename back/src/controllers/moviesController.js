const { getMovies } = require('../services/moviesService');

const getAllMovies = async (req, res) => {
  try {
    const movies = await getMovies();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllMovies };