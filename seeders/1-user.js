'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      username: 'nhatdeeptrai',
      fullName: 'Tran Quang Nhat',
      email: 'demo@demo.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Users', [{
      firstName: 'Tran Quang Nhat'
    }]);
  }
};