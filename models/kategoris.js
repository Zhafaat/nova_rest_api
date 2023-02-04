'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class kategoris extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      kategoris.hasOne(models.products, {
        foreignKey: {
          name: 'kategori_id'
        },
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      })
    }
  }
  kategoris.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey:true
    },
    nama: DataTypes.STRING,
    deskripsi: DataTypes.TEXT,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'kategoris',
  });
  return kategoris;
};