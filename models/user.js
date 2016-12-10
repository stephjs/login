"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    phonenumber: DataTypes.STRING,
    email: DataTypes.STRING,
    admin: DataTypes.STRING,
    password_hash: DataTypes.STRING
  }, {
    underscored: true,
    freezeTableName: true,
    // define the table's name
    tableName: 'users'
  })

  return User;
};
