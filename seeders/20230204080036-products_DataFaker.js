'use strict';

const ProductsData = require('../data_faker/products');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const products = new ProductsData
    await queryInterface.bulkInsert('products', products.dataFaker, {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('products', null, {});
  }
};
