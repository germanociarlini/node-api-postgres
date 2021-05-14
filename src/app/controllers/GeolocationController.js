import Geolocation from '../models/geolocation';

class GeolocationController {
    async create (req, resp) {
        const { name, type, coordinates } = req.body;
        const { dataValues } = await Geolocation.create({ name , geometry: { type, coordinates }});
        return resp.send({ dataValues });
    }

    async index (req, resp) {
        const response = await Geolocation.findAll().catch(err => console.log(err))
        return resp.send({ response })
    }
}

export default new GeolocationController();