const JWT = require('jsonwebtoken');

process.env.NODE_ENV === 'test' ? require('dotenv').config({ path: '.test.env' }) : require('dotenv').config();

module.exports = {
  encode: async (user) => { await JWT.sign(user, process.env.SECRET_KEY); },
  decode: async (token) => { await JWT.verify(token, process.env.SECRET_KEY); },
};
