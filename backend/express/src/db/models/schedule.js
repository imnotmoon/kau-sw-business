'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  Schedule.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        field: 'schedule_id',
      },
      start_date: DataTypes.DATEONLY,
      end_date: DataTypes.DATEONLY,
      title: DataTypes.STRING,
      link: DataTypes.STRING,
      category: DataTypes.STRING,
    },
    {
      sequelize,
      underscored: true,
      timestamps: true,
      modelName: 'Schedule',
      tableName: 'schedule',
      charset: 'utf8',
      collate: 'utf8_general_ci',
    }
  );
  return Schedule;
};
