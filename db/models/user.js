
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING(255),
      unique: true,
      allowNull: false,
      validate: {
        args: [2, 25],
        msg: 'Length of username must in range [2, 25] !',
      },
    },
    fullName: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [2, 25],
          msg: 'Length of full name must in range [2, 25] !',
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
  }, {
    freezeTableName: true,
  });
  // User.associate = function (models) {};
  return User;
};
