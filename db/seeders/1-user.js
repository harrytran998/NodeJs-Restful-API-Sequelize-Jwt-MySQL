
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      username: 'abcd123',
      fullName: 'Tran Quang Nhat',
      email: 'demo@demo.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      username: 'abcd456',
      fullName: 'Pham Ngoc Hoa',
      email: 'demo1@demo.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      username: 'abcd789',
      fullName: 'Do Quang Hiep',
      email: 'demo2@demo.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      username: 'abcd1011',
      fullName: 'Nguyen Tien Manh',
      email: 'demo3@demo.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      username: 'abcd1213',
      fullName: 'Phan Van Duc',
      email: 'demo4@demo.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      username: 'abcd1415',
      fullName: 'Nguyen Xuan Cuong',
      email: 'demo5@demo.com',
      createdAt: new Date(),
      updatedAt: new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Users', [{
      // firstName: 'Tran Quang Nhat'
    }]);
  },
};
