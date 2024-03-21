const { getMovies, createMovie } = require('../services/moviesService');


const getAllMovies = async (req, res) => {
  try {
    const movies = await getMovies();
    res.json(movies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const addMovie = async (req, res) => {
    try {
        const { title, year, director, duration, genre, rate, poster } = req.body;
        const movie = await createMovie({ title, year, director, duration, genre, rate, poster });
        res.status(201).json({ message: 'Película creada correctamente', movie });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


module.exports = { getAllMovies, addMovie };