module.exports = (sequelize, DataTypes) => {
    const Geolocation = sequelize.define('Geolocation', {
        name: DataTypes.STRING,
        geom: DataTypes.GEOMETRY
    });

    return Geolocation;
}