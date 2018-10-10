import express from 'express';
import bodyParser from 'body-parser';
import controllers from '../controllers';

const authRoute = express.Router();

authRoute.use(bodyParser.urlencoded({ extended: false }));
authRoute.use(bodyParser.json());

authRoute.post('/login', controllers.auth.login);
authRoute.post('/changePassword', controllers.auth.changePassword);

module.exports = authRoute;
