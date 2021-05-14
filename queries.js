const Pool = require('pg').Pool
const pool = new Pool({
    user: 'me',
    host: 'localhost',
    database: 'api',
    password: 'password',
    port: 5433
})

const getGeolocations = (request, response) => {
    pool.query('SELECT * FROM geolocations ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getGeolocationById = (request, response) => {
    const id = parseInt(request.params.id)
    pool.query('SELECT * FROM geolocations WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createGeolocation = (request, response) => {
    const { name, geom } = request.body

    pool.query('INSERT INTO geolocations (name, geom) VALUES ($1, $2)', [name, geom], (error, results) => {
        if (error) {
            throw error
        }

        response.status(201).send(`Geolocation added with ID: ${result.insertId}`)
    })
}

const updateGeolocation = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, geom } = request.body

    pool.query(
        'UPDATE geolocations SET name = $1, geom = $2 WHERE id = $3',
        [name, geom, id],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Geolocation modified with ID: ${id}`)
        }
    )
}

const deleteGeolocation = (request, response) => {

}