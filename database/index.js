import Sequelize from 'sequelize';

import Geolocation from '../src/app/models/geolocation';
import databaseConfig from './config';

const models = [Geolocation];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig.development);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();