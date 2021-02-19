"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
    }
  }
  User.init(
    {
      user_id: { type: DataTypes.INTEGER, primaryKey: true },
      user_name: DataTypes.STRING,
    },
    { timestamps: false, sequelize, modelName: "User" }
  );
  return User;
};
