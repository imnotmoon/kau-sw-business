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
      content: DataTypes.TEXT,
      writer: DataTypes.STRING,
      files: DataTypes.STRING,
      viewcnt: DataTypes.INTEGER,
      isPinned: DataTypes.INTEGER,
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
