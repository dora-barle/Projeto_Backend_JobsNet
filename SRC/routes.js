const express = require('express');
const CandidatoController = require('./controllers/CandidatoController');
const routes = new express.Router();

routes.post('/registro', CandidatoController.registro);

module.exports = routes;