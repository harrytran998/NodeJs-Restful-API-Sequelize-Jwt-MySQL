import bcrypt from 'bcrypt-nodejs';

module.exports = {
  up: async (queryInterface) => {
    const salt = await bcrypt.genSalt(10);
    return queryInterface.bulkInsert('Auth', [{
      username: 'abcd123',
      password: await bcrypt.hash('Love123', salt),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      username: 'abcd456',
      password: await bcrypt.hash('Love456', salt),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      username: 'abcd789',
      password: await bcrypt.hash('Love789', salt),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      username: 'abcd1011',
      password: await bcrypt.hash('Love1011', salt),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      username: 'abcd1213',
      password: await bcrypt.hash('Love1213', salt),
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      username: 'abcd1415',
      password: await bcrypt.hash('Love1415', salt),
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface) => {
    queryInterface.bulkDelete('Auth', [{
      // username: 'abcd1415'
    }]);
  },
};
