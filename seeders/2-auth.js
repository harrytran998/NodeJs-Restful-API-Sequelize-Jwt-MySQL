'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface) => {
    const salt = await bcrypt.genSalt(10);
    return queryInterface.bulkInsert('Auth', [{
      username: 'nhatdeeptrai',
      password: await bcrypt.hash('password', salt),
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface) => {
    queryInterface.bulkDelete('Auth', [{
      username: 'nhatdeeptrai'
    }]);
  }
};
