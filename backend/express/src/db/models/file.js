'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class File extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ File, Notice }) {
      // define association here
      File.belongsTo(Notice, {
        foreignKey: {
          name: 'noticeId',
          allowNull: false,
        },
        targetKey: 'id',
      });
    }
  }
  File.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'file_id',
      },
      filename: DataTypes.STRING,
      name: DataTypes.STRING,
    },
    {
      sequelize,
      underscored: true,
      timestamps: false,
      modelName: 'File',
      tableName: 'file',
      charset: 'utf8',
      collate: 'utf8_general_ci',
    }
  );
  return File;
};
