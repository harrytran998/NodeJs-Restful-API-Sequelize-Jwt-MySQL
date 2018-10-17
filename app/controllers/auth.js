const bcrypt = require('bcrypt-nodejs');
const models = require('../models');
const jwt = require('../helpers/JwtHelper');
const { jsonHelper } = require('../helpers/jsonHelper');

module.exports = {
  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      const auth = await models.Auth.findOne({ where: { username }, raw: true });
      const user = await models.Auth.findOne({ where: { username }, raw: true });
      if (!user) {
        const result = jsonHelper(null, 'No user data found !', 404);
        res.status(404).json(result);
        return;
      }
      const { id } = user;
      const hashedPassword = auth.password;
      const isPasswordCorrect = await bcrypt.compare(password, hashedPassword);
      if (isPasswordCorrect) {
        const token = await jwt.encode({ id, username });
        const result = jsonHelper(token, null, 200);
        res.status(200).json(result);
      } else {
        const result = jsonHelper(null, 'Wrong password', 401);
        res.status(401).json(result);
      }
    } catch (error) {
      const result = jsonHelper(null, error.message, 500);
      res.status(500).json(result);
    }
  },
  changePassword: async (req, res) => {
    try {
      const {
        username, oldPassword, newPassword, isConfirm,
      } = req.body;
      const { password } = await models.Auth.findOne({ where: { username }, raw: true });
      const isPasswordCorrect = await bcrypt.compare(oldPassword, password);
      if (!isPasswordCorrect) {
        const result = jsonHelper(null, 'Wrong old password', 401);
        res.status(401).json(result);
        return;
      }
      if (newPassword === isConfirm) {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);
        await models.Auth.update({ password: hashedPassword }, { where: { username } });
        const result = jsonHelper({ status: true }, null, 200);
        res.status(200).json(result);
      } else {
        const result = jsonHelper(null, 'Incorrect new password', 401);
        res.status(401).json(result);
      }
    } catch (error) {
      const result = jsonHelper(null, error.message, 500);
      res.status(200).json(result);
    }
  },
	
};
