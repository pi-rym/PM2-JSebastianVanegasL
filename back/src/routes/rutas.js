const express = require('express');
const router = express.Router();
const controlador = require('../controllers/controladore');

router.get('/movies', controlador.obtenerPeliculas);

module.exports = router;
