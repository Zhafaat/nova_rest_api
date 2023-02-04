'use strict';

const TransaksesData = require('../data_faker/transakses');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const transakses = new TransaksesData
    await queryInterface.bulkInsert('transakses', transakses.dataFaker, {});
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.bulkDelete('transakses', null, {});
  }
};
