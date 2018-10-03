'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
        validate: {
          args: [2, 25],
          msg: "Length of username must in range [2, 25] !"
        }
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
        unique: true,
        validate: {
          len: {
            args: [2, 25],
            msg: "Length of password must in range [2, 25] !"
          },
          containsNumber: (password) => {
            let check = /\d/.test(password)
            if (!check) {
              throw new Error('Password must contain at least 1 number')
            }
          },
          /**
           * @param {String} bodyVal
           */
          startWihtUpperCase: (bodyVal) => {
            let first = bodyVal.charAt(0)
            let check = first.toUpperCase === first
            if (check) {
              throw new Error('First character of password must be a uppercase character')
            }
          }
        }
      },
      fullName: {
        type: Sequelize.STRING,
        validate: {
          len: {
            args: [2, 25],
            msg: "Length of full name must in range [2, 25] !"
          }}
      },
      email: {
        type: Sequelize.STRING,
        validate: {
          isEmail: true
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Users');
  }
};