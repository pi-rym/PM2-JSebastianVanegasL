const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const moviesRoutes = require('../routes/movies'); 

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(moviesRoutes);

module.exports = app;