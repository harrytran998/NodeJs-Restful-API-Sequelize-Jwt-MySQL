const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('./config/config.json')[env];

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect,
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})
sequelize.authenticate().then(() => {
  console.log('connect succes !');
}).catch(err => console.log(`Can't connect, ${err} !`))

const User = sequelize.define('user', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      len: [2, 25]
    }
  }
});

// sequelize.sync().then(() => {
//   User.create({
//     username: 'jetaimefrc',
//     password: '123456'
//   })
// }).catch((err) => console.log(err))

User
  .findById(1)
  .then((result) => {
  console.log(result.dataValues);  
}).catch(() => console.log('Not found !'))

module.exports = User