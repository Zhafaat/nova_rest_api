'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  products.init({
    id: DataTypes.INTEGER,
    kategoris_id: DataTypes.INTEGER,
    tahun_keluaran: DataTypes.STRING,
    warna: DataTypes.STRING,
    harga: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'products',
  });
  return products;
};