'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Notice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ File, Notice }) {
      // define association here
      Notice.hasMany(File, {
        foreignKey: {
          name: 'noticeId',
          allowNull: false,
        },
        sourceKey: 'id',
        as: 'files',
      });
    }
  }
  Notice.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'notice_id',
      },
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      writer: DataTypes.STRING,
      category: DataTypes.STRING,
      pinFlag: DataTypes.BOOLEAN,
      viewCount: DataTypes.INTEGER,
    },
    {
      sequelize,
      underscored: true,
      timestamps: true,
      modelName: 'Notice',
      tableName: 'notice',
      charset: 'utf8',
      collate: 'utf8_general_ci',
    }
  );
  return Notice;
};
