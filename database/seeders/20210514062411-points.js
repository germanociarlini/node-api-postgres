'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('geolocations', [{
       name: 'John Doe',
       geometry: Sequelize.fn('ST_GeomFromText', 'POINT(52.458415 16.904740)'),
       created_at: new Date(),
       updated_at: new Date(),
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};

