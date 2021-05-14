import { Model, DataTypes } from 'sequelize';

class geolocation extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING,
      geometry: DataTypes.GEOMETRY
    }, { sequelize });

    return this;
  }
};

export default geolocation;