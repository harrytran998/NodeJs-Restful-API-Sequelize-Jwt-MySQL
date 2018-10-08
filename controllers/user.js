import {
  jsonHelper,
} from '../helpers/jsonResponse';
import models from '../db/models';

const bcrypt = require('bcrypt-nodejs');

module.exports = {
  get: async (req, res) => {
    try {
      const users = await models.User.findAll({
        raw: true,
      });
      if (users.length) {
        const result = jsonHelper(users, null, 200);
        res.status(200).json(result);
      } else {
        const result = jsonHelper(null, 'Node User data found', 404);
        res.status(404).json(result);
      }
    } catch (err) {
      const result = jsonHelper(null, err.message, 500);
      res.status(500).json(result);
    }
  },
  getOne: async (req, res) => {
    try {
      const user = await models.User.findOne({
        where: {
          id: req.params.id,
        },
        raw: true,
      });
      if (user) {
        const result = jsonHelper(user, null, 200);
        res.status(200).json(result);
      } else {
        const result = jsonHelper(null, 'No User data found!', 404);
        res.status(404).json(result);
      }
    } catch (error) {
      const result = jsonHelper(null, error.message, 500);
      res.status(500).json(result);
    }
  },
  create: async (req, res) => {
    try {
      const {
        _username, _password, _fullName, _email,
      } = req.body;
      const newUser = await models.User.create({
        username: _username,
        fullname: _fullName,
        email: _email,
      });
      const salt = await bcrypt.genSalt(10);
      await models.Auth.create({
        username: _username,
        password: await bcrypt.hash(_password, salt),
      });
      const result = jsonHelper(newUser, null, 200);
      res.status(200).json(result);
    } catch (error) {
      const result = jsonHelper(null, error.message, 500);
      res.status(500).json(result);
    }
  },
  update: async (req, res) => {
    try {
      const { _fullname, _email } = req.body;
      await models.User.update({
        fullname: _fullname,
        email: _email,
      }, { where: { id: req.params.id }, raw: true });
      const result = jsonHelper({ status: true }, null, 200);
      res.status(200).json(result);
    } catch (error) {
      const result = jsonHelper(null, error.message, 500);
      res.status(500).json(result);
    }
  },
  delete: async (req, res) => {
    try {
      const user = await models.User.destroy({
        where: {
          id: req.params.id,
        },
      });
      if (user) {
        const result = jsonHelper({
          status: true,
        }, null, 200);
        res.status(200).json(result);
      } else {
        const result = jsonHelper({
          status: true,
        }, null, 404);
        res.status(404).json(result);
      }
    } catch (error) {
      const result = jsonHelper(null, error.message, 500);
      res.status(500).json(result);
    }
  },
};
