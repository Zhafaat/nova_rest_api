'use strict';

const KategorisData = require('../data_faker/kategoris');


/** @type {import('sequelize-cli').Migration} */

module.exports = {
  async up (queryInterface, Sequelize) {
    const kategoris = new KategorisData()
    await queryInterface.bulkInsert('kategoris', kategoris.dataFaker, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('kategoris', null, {});
  }
};
