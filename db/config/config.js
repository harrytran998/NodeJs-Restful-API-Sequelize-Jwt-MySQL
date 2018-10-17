require('../../app/utils/logger');
const logger = require('winston');
process.env.NODE_ENV === 'test' ? require('dotenv').config({ path: '.test.env' }):require('dotenv').config();
module.exports = {
  'development': {
    'username': process.env.DB_USER,
    'password': process.env.DB_PASS,
    'database': process.env.DB_NAME,
    'host': '127.0.0.1',
    'port': 6969,
    'dialect': 'mysql',
    'operatorsAliases': false,
    'logging': logger.debug
  },
  'test': {
    'username': process.env.DB_USER,
    'password': process.env.DB_PASS,
    'database': process.env.DB_NAME,
    'host': '127.0.0.1',
    'port': 5432,
    'dialect': 'postgres',
    'operatorsAliases': false,
    'logging': false
  },
  'docker': {
    'username': 'postgres',
    'password': 'pass',
    'database': 'crummy_cookbook',
    'host': 'postgres',
    'port': 5432,
    'dialect': 'postgres',
    'operatorsAliases': false,
    'logging': logger.debug
  },
  'production': {
    'username': process.env.DB_USER,
    'password': process.env.DB_PASS,
    'database': process.env.DB_NAME,
    'host': '127.0.0.1',
    'port': 5432,
    'dialect': 'postgres',
    'operatorsAliases': false,
    'logging': logger.debug
  }
};
