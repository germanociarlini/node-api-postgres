const { Router } = require('express');
const { create } = require('./app/controllers/GeolocationController');
const routes = Router();

routes.post("/geolocation", create)

module.exports = routes