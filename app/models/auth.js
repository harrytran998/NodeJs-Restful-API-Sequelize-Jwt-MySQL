
module.exports = (sequelize, DataTypes) => {
  const Auth = sequelize.define('Auth', {
    username: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      validate: {
				args: [2, 25],
        msg: 'Length of username must in range [2, 25] !',
      },
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: [2, 25],
          msg: 'Length of password must in range [2, 25] !',
        },
        containsNumber: (password) => {
          const check = /\d/.test(password);
          if (!check) {
            throw new Error('Password must contain at least 1 number');
          }
        },
        /**
         * @param {String} pass
         */
        startWihtUpperCase: (pass) => {
          const first = pass.charAt(0);
          const check = first.toUpperCase === first;
          if (check) {
            throw new Error('First character of password must be a uppercase character');
          }
        },
      },
    },
  }, {
    freezeTableName: true,
  });
  Auth.associate = () => {
  };
  return Auth;
};
