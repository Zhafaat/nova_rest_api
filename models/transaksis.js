'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaksis extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  transaksis.init({
    id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    tanggal_transaksi: DataTypes.DATE,
    stock_keluar: DataTypes.STRING,
    total_harga: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'transaksis',
  });
  return transaksis;
};