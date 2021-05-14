import Router from 'express';
import GeolocationController from './app/controllers/GeolocationController';
const routes = Router();

routes.post("/geolocation", GeolocationController.create)
routes.get("/geolocation", GeolocationController.index)

module.exports = routes