'use strict';

const userModel = require('./users.js');
const { Sequelize, DataTypes } = require('sequelize');

const DATABASE_URL = process.env.DATABASE_URL || 'sqlite::memory';

const sequelize = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: true,
    rejectUnauthorized: false,
  },
});

module.exports = {
  authDb: sequelize,
  users: userModel(sequelize, DataTypes),
};
