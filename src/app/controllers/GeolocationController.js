const { Geolocation } = require('../models/Geolocation');

const create = async (req, resp) => {
    //await Geolocation.create({name: 'reidolatifundio', geom: {}});
    return resp.send({message: "deu bom"});
}

module.exports = {
    create
}