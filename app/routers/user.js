import express from 'express';
import bodyParser from 'body-parser';
import controllers from '../controllers';

const userRoute = express.userRouter();

userRoute.use(bodyParser.urlencoded({ extended: false }));
userRoute.use(bodyParser.json());

userRoute.get('/', controllers.user.get);
userRoute.get('/:id', controllers.user.getOne);
userRoute.post('/', controllers.user.create);
userRoute.put('/:id', controllers.user.update);
userRoute.delete('/:id', controllers.user.delete);

module.exports = userRoute;
