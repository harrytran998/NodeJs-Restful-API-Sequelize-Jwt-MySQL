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
  },
  port: 3306
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
      len: {
        args: [2, 25],
        msg: `Password length must be in range [2,25]`
      },
      /**
       * @param {String} bodyVal
       */
      startWihtUpperCase: (bodyVal) => {
        let first = bodyVal.charAt(0)
        let check = first.toUpperCase === first
        if(check){
          throw new Error('First character of password must be a uppercase character')
        }
      },
      /**
       * @param {String} val
       */
      containsNumber: (val) => {
        let check =  /\d/.test(val)
        if(!check){
          throw new Error('Password must contains at lest 1 number')
        }
      } 
    }
  }
}, {
  timestamps: false,
  tableName: 'User',
  freezeTableName: true,
  version: true
});

sequelize.sync({
  force: true,
  logging: console.log()
}).then(() => {
  User.create({
    username: 'jetaimefrc1',
    password: 'Jetaime1'
  })
}).catch((err) => console.log(err))

// User
//   .findById(1)
//   .then((result) => {
//   console.log(result.dataValues);  
// }).catch(() => console.log('Not found !'))

