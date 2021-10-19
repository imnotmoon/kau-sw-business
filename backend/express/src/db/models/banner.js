'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Banner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Banner.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'banner_id',
      },
      imageUrl: DataTypes.STRING,
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      viewOrder: DataTypes.INTEGER,
      useFlag: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      underscored: true,
      timestamps: true,
      modelName: 'Banner',
      tableName: 'banner',
      charset: 'utf8',
      collate: 'utf8_general_ci',
    }
  );
  return Banner;
};
