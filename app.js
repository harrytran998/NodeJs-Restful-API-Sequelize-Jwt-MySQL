const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require('./config/config.json')[env];
const User = sequelize.import('./server/models/def_models/user.js')

const sequelize = new  Sequelize(config.database, config.username, config.password, {
  define: "MYISAM",
  host: config.host,
  dialect: config.dialect,
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  port: 3306
})

sequelize.authenticate().then(() => {
  console.log('connect succes !');
}).catch(err => console.log(`Can't connect, ${err} !`))


User
  .create({
    username: 'Tri',
    password: '*dasd123'
  })
  .then(() => {
    User.findOrCreate({
      where: {
        username: 'Tri',
      },
      defaults: {
        password: 'something'
      }
    })
  })
  .spread((user, created) => {
    console.log(user.get({
      plain: true
    }))
    console.log(created)
  })
  .catch((err) => {
    console.log(err.Err)
  })
