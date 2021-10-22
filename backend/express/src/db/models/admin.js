'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Admin.init(
    {
      id: {
        type: DataTypes.STRING,
        autoIncrement: true,
        primaryKey: true,
        field: 'admin_id',
      },
      userId: DataTypes.STRING,
      password: DataTypes.STRING,
      name: DataTypes.STRING,
    },
    {
      sequelize,
      underscored: true,
      timestamps: true,
      modelName: 'Admin',
      tableName: 'admin',
      charset: 'utf8',
      collate: 'utf8_general_ci',
    }
  );
  return Admin;
};
