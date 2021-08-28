'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Notice.init(
    {
      title: DataTypes.STRING,
      contents: DataTypes.TEXT,
      writer: DataTypes.STRING,
      viewCnt: DataTypes.INTEGER,
      viewOrder: DataTypes.INTEGER,
    },
    {
      sequelize,
      underscored: true,
      timestamps: true,
      modelName: 'Notice',
      tableName: 'Notices',
      charset: 'utf8',
      collate: 'utf8_general_ci',
    }
  );
  return Notice;
};
