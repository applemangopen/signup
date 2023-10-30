const { db } = require("../constants");
const { Sequelize, Model } = require("sequelize");

const { database, username, password } = db;
const sequelize = new Sequelize(database, username, password, db);

module.exports = {
    Sequelize,
    DataTypes: Sequelize.DataTypes,
    Model,
    sequelize,
};
