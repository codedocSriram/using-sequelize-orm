const { Sequelize, DataTypes } = require("sequelize");

const sequelize = require("../utils/dbConnection");

const Students = sequelize.define("students", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  }
});

module.exports = Students;
