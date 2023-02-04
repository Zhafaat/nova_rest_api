'use strict';

const StocksData = require('../data_faker/stocks');



/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    const stocks = new StocksData()
    await queryInterface.bulkInsert('stocks', stocks.dataFaker, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('stocks', null, {});
  }
};
