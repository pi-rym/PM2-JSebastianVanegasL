const express = require('express');
const app = express();
const router = require('./routes/rutas');

app.use (router);

module.exports = app