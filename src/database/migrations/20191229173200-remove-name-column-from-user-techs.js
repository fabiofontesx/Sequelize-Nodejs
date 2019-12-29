'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('user_techs', 'name');
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('user_techs', 'name', Sequelize.STRING, {
      allowNull: false
    });
  }
};
