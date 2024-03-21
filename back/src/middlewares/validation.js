const validateMovieData = (req, res, next) => {
    const { title, year, director, duration, genre, rate, poster } = req.body;

    
    if (!title || !year || !director || !duration || !genre || !rate || !poster) {
        return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    
    if (typeof year !== 'number' || year.toString().length !== 4) {
        return res.status(400).json({ error: "El año debe ser un número de 4 dígitos" });
    }

    
    if (typeof rate !== 'number' || isNaN(rate) || rate < 0 || rate > 10) {
        return res.status(400).json({ error: "El rate debe ser un número decimal entre 0 y 10" });
    }
    next();
};

module.exports = { validateMovieData };