const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const User = require('../model/User');
const Address = require('../model/Address');
const Techs = require('../model/Techs');
const connection = new Sequelize(dbConfig);


User.init(connection);
Address.init(connection);
Techs.init(connection);


Address.associate(connection.models);
User.associate(connection.models);
Techs.associate(connection.models);

module.exports = connection;